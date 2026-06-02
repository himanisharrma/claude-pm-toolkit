---
name: prd-framework
description: Templates and rules for writing decision-ready PRDs. Use when drafting or reviewing any product requirements doc, spec, or brief.
---
# PRD framework

A good PRD answers: **Why now? For whom? What does success look like? What are we NOT doing?**

## Structure
1. **Problem & evidence** — the user pain + proof it's real (data/quotes). Not a solution.
2. **Target user / JTBD** — who, and the job they're hiring this for.
3. **Goals & non-goals** — outcomes, plus explicit non-goals to bound scope.
4. **Success metrics** — 1 north-star + 2-3 inputs + 1 guardrail (what must not regress).
5. **Requirements** — user stories with acceptance criteria, labeled P0/P1/P2.
6. **UX / flows**, **dependencies & risks**, **open questions**, **out of scope**.
7. **Rollout & measurement** — how it ships and how you'll know it worked.

## Rules
- Outcomes over outputs; measurable over vague. Mark inferences `(assumption)`.
- Every requirement traces to a goal; every goal to a metric.
- If you can't state the success metric, the problem isn't clear enough yet.
