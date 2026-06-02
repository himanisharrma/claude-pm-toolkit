# Example workflow — Competitive-intel swarm (multi-agent)

A fan-out/synthesis pattern to run with the Claude Code **Workflow** tool or Agent SDK.

```
phase("Research")
const competitors = [...]                         // discovered or provided
const briefs = await parallel(competitors.map(c => () =>
  agent(`Research ${c}: features, pricing, positioning, target segment, recent moves. Cite sources; mark
         unverified claims.`, { agentType: 'competitive-analyst', schema: BRIEF_SCHEMA })))

phase("Synthesize")
const matrix = await agent(`Merge these competitor briefs into one feature+pricing matrix, note where we
  win/lose/par, and 3 strategic implications. Inputs: ${JSON.stringify(briefs)}`, { schema: MATRIX_SCHEMA })

phase("Critique")  // completeness critic → another round if gaps
const gaps = await agent(`What competitor, dimension, or source is missing from this matrix?`)
```

Why it's better than one pass: each competitor is researched in isolation (no anchoring), the synthesis
de-dupes, and the critic catches blind spots. Swap `competitive-analyst` for `market-sizer`/`feedback-
synthesizer` to reuse the shape for sizing or feedback synthesis.
