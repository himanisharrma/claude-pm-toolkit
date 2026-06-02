# claude-pm-toolkit

A portable **AI Product Manager toolkit for Claude Code** — reusable subagents, skills, slash commands, and
runnable multi-agent workflows that work in *any* product repo (not tied to one project).

## What's inside (`.claude/`)

**Subagents** (`.claude/agents/`) — specialized PM personas:
`prd-writer` · `prd-red-teamer` · `competitive-analyst` · `market-sizer` · `metrics-designer` ·
`experiment-designer` · `roadmap-prioritizer` · `feedback-synthesizer` · `persona-builder` ·
`stakeholder-comms` · `data-analyst` (CSV/funnel/cohort analysis)

**Skills** (`.claude/skills/`) — frameworks the agents draw on:
`prd-framework` · `prioritization` (RICE/ICE/Kano/MoSCoW) · `north-star-metrics` (HEART/AARRR) ·
`discovery` (OST + JTBD) · `experimentation` (A/B, sample size) · `gtm-playbook` · `okrs` · `story-mapping`

**Slash commands** (`.claude/commands/`):
`/prd` · `/prioritize` · `/tam` · `/personas` · `/metrics` · `/experiment` · `/competitor` · `/one-pager` ·
`/feedback` · `/release-notes` · `/okrs` · `/story-map` · `/analyze`

**Multi-agent workflows** (`workflows/`):
- `competitive-intel-swarm.mjs` — **runnable** Claude Code Workflow (fan-out per competitor → synthesize matrix → completeness critic)
- `discovery-to-prd.md` — discovery → draft → red-team → revise (pattern)

## Use it

**Per project:** copy the `.claude/` folder into any repo — commands, subagents, and skills auto-load.

**Globally:** copy `.claude/agents`, `.claude/commands`, `.claude/skills` into `~/.claude/` for every project.

Then: `/prd add a referral program`, `/prioritize <backlog>`, `/competitor Notion, Coda`, `/analyze data.csv`,
`/okrs Q3 activation`, `/story-map checkout`, …

**Run the workflow** from Claude Code's Workflow tool:
```js
Workflow({ scriptPath: "workflows/competitive-intel-swarm.mjs",
           args: { competitors: ["Notion", "Coda", "Airtable"], you: "OurProduct" } })
```

## Conventions
Measurable outcomes over feature lists; explicit assumptions; adversarial review before commit; show the
inputs, not just the score. Generic templates — no secrets, no company data. Extend freely (aitmpl.com /
awesome-claude-code).
