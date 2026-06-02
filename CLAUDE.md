# CLAUDE.md — claude-pm-toolkit

This repo is a **reusable AI-PM component library** for Claude Code, not an app.

- `.claude/agents/` — PM subagent personas. `.claude/skills/` — PM frameworks. `.claude/commands/` — slash
  commands that compose them. `workflows/` — example multi-agent orchestrations.
- When adding components: keep them **project-agnostic** (no company/product specifics), outcome-oriented,
  and honest (mark assumptions, show inputs behind any score). One concern per file.
- No code to build/run and no secrets — these are markdown prompts/specs.
