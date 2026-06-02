---
name: prioritization
description: Frameworks + formulas for prioritizing a backlog (RICE, ICE, Kano, MoSCoW, cost-of-delay). Use when ranking features or deciding what to build next.
---
# Prioritization

## RICE  — score = (Reach × Impact × Confidence) / Effort
- **Reach**: # users/events per period. **Impact**: 3=massive,2=high,1=med,.5=low,.25=min.
- **Confidence**: 100/80/50%. **Effort**: person-months. Higher score = higher priority.

## ICE — (Impact × Confidence × Ease), each 1-10. Faster, rougher than RICE.

## Kano — classify features: Basic (expected), Performance (more=better), Delighter, Indifferent.
Don't over-invest in Basics; a few Delighters differentiate.

## MoSCoW — Must / Should / Could / Won't (this cycle). Good for release scoping.

## Cost of Delay / WSJF — value lost per week of delay ÷ effort. Good when timing matters.

## Rules
- Show inputs, not just scores — the assumptions are the debate.
- "High score" ≠ "do next": account for dependencies, sequencing, and quick wins.
- Low confidence → send to discovery before committing build effort.
