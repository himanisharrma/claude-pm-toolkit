# Example workflow — Discovery → PRD → Red-team pipeline

```
phase("Discovery")
const opportunities = await agent(`Map the Opportunity-Solution Tree for outcome: <metric>. Surface the
  riskiest assumptions and the cheapest test for each.`, { skills: ['discovery'] })

phase("Draft")
const prd = await agent(`Draft a PRD for the top opportunity.`, { agentType: 'prd-writer', schema: PRD_SCHEMA })

phase("Red-team")   // adversarial gate before human review
const critique = await agent(`Pressure-test this PRD; list Critical/Should-fix/Nit + 3 must-answer questions.
  PRD: ${prd}`, { agentType: 'prd-red-teamer' })

phase("Revise")
const finalPrd = await agent(`Revise the PRD addressing the Critical/Should-fix items. PRD: ${prd};
  Critique: ${critique}`, { agentType: 'prd-writer' })
```

Deterministic gates (red-team must pass) + human approval before build. Mirrors the §3.1 pattern.
