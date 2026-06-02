/**
 * competitive-intel-swarm.mjs — runnable Claude Code Workflow
 * -------------------------------------------------------------------------
 * Fan-out competitive research (one agent per competitor, in parallel) →
 * synthesize a single matrix → a completeness critic flags gaps.
 *
 * Run it from Claude Code's Workflow tool:
 *   Workflow({ scriptPath: "workflows/competitive-intel-swarm.mjs",
 *              args: { competitors: ["Notion", "Coda", "Airtable"], you: "OurProduct" } })
 *
 * Uses the toolkit's `competitive-analyst` subagent (.claude/agents/) when available.
 */
export const meta = {
  name: 'competitive-intel-swarm',
  description: 'Parallel competitor research → synthesized feature/pricing matrix → completeness critic',
  phases: [
    { title: 'Research', detail: 'one analyst agent per competitor, in parallel' },
    { title: 'Synthesize', detail: 'merge briefs into one matrix' },
    { title: 'Critique', detail: 'flag missing competitors/dimensions/sources' },
  ],
}

const competitors = (args && args.competitors) || []
const you = (args && args.you) || 'our product'
if (!competitors.length) {
  log('No competitors passed. Call with args: { competitors: ["A","B"], you: "OurProduct" }')
  return { error: 'no_competitors' }
}

const BRIEF_SCHEMA = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    segment: { type: 'string' },
    positioning: { type: 'string' },
    pricing: { type: 'string' },
    keyFeatures: { type: 'array', items: { type: 'string' } },
    strengths: { type: 'array', items: { type: 'string' } },
    weaknesses: { type: 'array', items: { type: 'string' } },
    unverified: { type: 'array', items: { type: 'string' }, description: 'claims that could not be verified' },
  },
  required: ['name', 'positioning', 'pricing', 'keyFeatures'],
}

phase('Research')
const briefs = (await parallel(competitors.map((c) => () =>
  agent(
    `Research the competitor "${c}". Report segment, positioning, pricing/packaging, key features, strengths,
     weaknesses. Cite sources where possible; list anything you could not verify under "unverified". Be
     objective — no hype.`,
    { label: `research:${c}`, phase: 'Research', agentType: 'competitive-analyst', schema: BRIEF_SCHEMA }
  )
))).filter(Boolean)

phase('Synthesize')
const matrix = await agent(
  `Merge these competitor briefs into ONE markdown comparison for "${you}":
   (1) a feature + pricing matrix (rows = competitors, columns = key dimensions),
   (2) where "${you}" likely wins / loses / is at parity,
   (3) three strategic implications (gaps to exploit, threats to defend).
   Keep unverified claims marked. Briefs: ${JSON.stringify(briefs)}`,
  { label: 'synthesize', phase: 'Synthesize' }
)

phase('Critique')
const gaps = await agent(
  `Act as a completeness critic. Given this competitive matrix, what is MISSING — an obvious competitor not
   covered, a buyer-relevant dimension absent, or a claim that needs a source? List concrete gaps only.
   Matrix: ${matrix}`,
  { label: 'critic', phase: 'Critique' }
)

log(`Researched ${briefs.length}/${competitors.length} competitors.`)
return { matrix, gaps, briefs }
