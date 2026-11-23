---
title: Documentation That Ships With the Pull Request
sidebar_class_name: hidden
date: 2024-10-18
---
![](_resources/Documentation%20That%20Ships%20With%20the%20Pull%20Request/597805e78b465af7fd0886fbf9d01caf_MD5.jpeg)

At Kroll, the Cyber Risk division's platform API surface grew continuously. Every new vendor integration, every new detection module, added endpoints — and the reference documentation was written on a separate treadmill, after the fact, by engineers who had already moved on to the next thing. By the time a page was updated, the code underneath it had moved again.

Stale reference docs are worse than absent ones. Internal teams and enterprise clients treat them as authoritative, build against them, and only discover the gap in production. But the docs never lost for lack of effort — they lost because the work started too late. The only place with complete context on a change was the pull request itself: the description explained the intent, and the diff held the exact code.

With a platform engineer mindset, I designed and shipped a documentation pipeline that used the PR as its source of truth — triggered on change, pulling the relevant source at the exact commit, matching it against the team's documentation template, and drafting each changed endpoint for a human to verify before it reached the published shelf.

## The Trade-Offs

Automating documentation is risky because fluent prose reads as accurate. A generated reference page that names the wrong parameter or omits an error code is worse than a blank page — it will be trusted, copied into client integrations, and cited in support tickets. So the pipeline was never allowed to publish. Its only output was a draft, and a human stayed on the last mile.

Being generous with context fails in the other direction. Feed an entire pull request into a model and you get confident description of files that didn't change, drifting further toward generic prose as the diff grows. So the flow narrowed twice: it fetched only the specific source files at the commit in question, and it separated identifying what changed from writing it up, one endpoint at a time.

Instead of choosing between machine-speed volume and human-written accuracy, I focused on **narrow, template-bound generation behind a mandatory review gate** — drafting at machine speed, publishing at human speed.

## Execution

- **PR-Triggered Pipeline:** The flow fired on pull request and took the description as its statement of intent — what changed, and why. That was the context no later documentation pass could reconstruct.
- **Exact-Commit Code Resolution:** Rather than reading a working branch, the flow resolved the specific source files at the PR's commit SHA, so every generated page reflected the code in that change and nothing else.
- **Two-Phase Generation:** A first pass identified which endpoints the PR actually touched; a second wrote each one up individually against the team's endpoint documentation template. Splitting _what changed_ from _describe what changed_ kept each step narrow and each output reviewable.
- **Draft-First, Publish-Last:** Output landed as a draft file in the documentation workspace for a human to check against the diff before promotion. The automation removed the blank-page problem, not the judgment.
- **Built Where the Work Already Lived:** Implemented as a low-code flow inside the Microsoft stack the division already ran, sitting directly beside Azure DevOps and Jira. No new infrastructure, no service to maintain, and the team could adjust it without pulling in an engineer.

## Outcome

- **Documentation Kept Pace With Code:** Endpoint pages were drafted at the moment of change, while the context was still intact, instead of waiting on a documentation cycle that never arrived.
- **Drift Caught Before Release:** Reviewing drafts against the diff surfaced undocumented parameters and breaking changes while the PR was still open, rather than months later.
- **Authorship Became Review:** Engineers stopped writing reference docs from scratch and started verifying them — moving the expensive part of the work from production to judgment.
- **Reusable Across Integrations:** Because output was shaped by the team's own template and sourced from the commit itself, the same flow applied to new modules and vendor integrations without per-project prompt work.