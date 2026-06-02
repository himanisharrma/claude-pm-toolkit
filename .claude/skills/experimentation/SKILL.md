---
name: experimentation
description: A/B testing and experiment design — hypotheses, sample size, guardrails, validity. Use when planning or reviewing an experiment.
---
# Experimentation

## Hypothesis
"If we [change], then [primary metric] will [direction/magnitude] because [mechanism]." Must be falsifiable.

## Design checklist
- One **primary metric** + **guardrails**. Pre-register the **decision rule**.
- **Unit of randomization** (user/session/account) — match it to the metric to avoid leakage.
- **Sample size**: need baseline rate, **minimum detectable effect**, power (0.8), alpha (0.05). If the time
  to reach significance is unreasonable, the effect is too small to A/B — reconsider.

## Threats to validity
Novelty effect, network interference, seasonality, peeking (don't stop early), Simpson's paradox.

## Rules
- Decide the decision *before* you see results. Ship on the metric, watch the guardrails.
