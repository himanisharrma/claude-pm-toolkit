# claude-pm-toolkit

A portable **AI Product Manager toolkit for Claude Code** — reusable subagents, skills, slash commands, and
example multi-agent workflows that work in *any* product repo (not tied to one project).

## What's inside (`.claude/`)

**Subagents** (`.claude/agents/`) — specialized PM personas:
`prd-writer` · `prd-red-teamer` · `competitive-analyst` · `market-sizer` · `metrics-designer` ·
`experiment-designer` · `roadmap-prioritizer` · `feedback-synthesizer` · `persona-builder` · `stakeholder-comms`

**Skills** (`.claude/skills/`) — frameworks the agents draw on:
`prd-framework` · `prioritization` (RICE/ICE/Kano/MoSCoW) · `north-star-metrics` (HEART/AARRR) ·
`discovery` (OST + JTBD) · `experimentation` (A/B, sample size) · `gtm-playbook`

**Slash commands** (`.claude/commands/`):
`/prd` · `/prioritize` · `/tam` · `/personas` · `/metrics` · `/experiment` · `/competitor` · `/one-pager` ·
`/feedback` · `/release-notes`

**Example multi-agent workflows** (`workflows/`):
`competitive-intel-swarm` (fan-out → synthesize → critic) · `discovery-to-prd` (discovery → draft → red-team → revise)

## Use it

**Per project:** copy the `.claude/` folder into any repo — the commands, subagents, and skills are picked up
automatically by Claude Code.

**Globally:** copy `.claude/agents`, `.claude/commands`, `.claude/skills` into `~/.claude/` to make them
available in every project.

Then: type `/prd add a referral program`, `/prioritize <backlog>`, `/competitor Notion, Coda`, etc. The
example `workflows/` are run via Claude Code's Workflow tool or the Agent SDK.

## Conventions
Every component favors: measurable outcomes over feature lists, explicit assumptions, adversarial review
before commit, and "show the inputs, not just the score." Marked-up inferences over false confidence.

> Generic templates — no secrets, no company data. Extend freely (e.g. from aitmpl.com / awesome-claude-code).
