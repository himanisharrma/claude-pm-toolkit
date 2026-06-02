---
description: Turn a changelog / merged PRs into customer-facing release notes
argument-hint: [version or date range] (defaults to recent changes)
---
Use the **stakeholder-comms** subagent. From the changes in ${ARGUMENTS:-the recent git log / merged PRs},
write customer-facing release notes grouped by New / Improved / Fixed, in benefit-led language (what the user
can now do), with any breaking changes called out first.
