---
title: Evolution of my Digital Garden
sidebar_class_name: hidden
date: 2026-11-20
---
![](_resources/Auxsol%20Cloud%20FastAPI/8cc2738ff2a9b5eea2cfad11674da1e6_MD5.jpeg)

For years, my technical notes, troubleshooting logs, and architecture references lived in a private collection of plain Markdown files. For personal recall, it worked great—fast to write, version-controlled, and friction-free. I use Obsidian with Syncthing, check it out!

However, as I started helping more peers, sharing guides, and solving recurring engineering problems, keeping that knowledge locked in Google Notes or Drive created a bottleneck: I was constantly repeating explanations or copy-pasting raw notes that lacked navigation, search, or structure.

Fast-forward a few years, and as my engineering work gained momentum, my needs evolved again. Beyond sharing quick technical guides, I needed a centralized platform to showcase deeper **case studies and engineering write-ups**—turning years of quiet execution into visible, verifiable proof of work.

# The Trade-Offs

Turning a personal note-taking habit into a public-facing engineering hub meant making an unconventional architectural bet: treating raw personal notes like production source code.

- **CI/CD for Personal Notes (Woodpecker) vs. Manual :** Running a **self-hosted Woodpecker CI/CD** pipeline just to publish personal Markdown notes sounds like an over-engineered "crazy take" on paper. In reality, manually copying files between a private vault and a public blog causes sync fatigue and human error. Automating the filter-and-deploy step meant I could keep writing in one place while letting CI/CD handle the publishing mechanics.
- **Static Site Generator (Docusaurus) vs. Dynamic CMS:** Building a custom blog or managing a database-backed CMS adds server overhead and maintenance for fundamentally static content. **Docusaurus** let me keep my Markdown-first workflow while unlocking full-text search, structured sidebars, and clean typography.
- **Edge Static Hosting (Cloudflare Pages) vs. Self-Hosted Web Servers:** While I wanted full control over the build pipeline via self-hosted Woodpecker, running a self-hosted web server just to serve static HTML was unnecessary drag. Pushing the compiled frontend to **Cloudflare Pages** gave me global CDN edge caching and zero runtime server maintenance.
- **Pure Documentation vs. Narrative Storytelling:** Standard documentation layouts work well for tactical guides, but they don't showcase strategic impact. Expanding the site's information architecture to separate **guides/docs** from **engineering write-ups and case studies** gave peers and engineering leaders clear, dedicated paths to explore my work.

# Execution

Rather than abandoning my Markdown habit for a traditional blogging platform, I wrapped my existing notes repository in a full software delivery lifecycle:

- **Public/Private Vault Partitioning:** Divided my personal Markdown knowledge base into strict public and private boundaries—keeping rough scratchpads, credentials, and proprietary work notes private while flagging polished guides for public release.
- **Automated Note Publishing via Self-Hosted Woodpecker CI/CD:** Configured a **self-hosted Woodpecker CI/CD** pipeline triggered on Git commits to automatically extract the public note subset, compile the **Docusaurus** frontend, verify broken links/builds, and push artifacts directly to production.
- **Zero-Server Edge Delivery on Cloudflare Pages:** Deployed the compiled static frontend to **Cloudflare Pages**, decoupling my self-hosted build infrastructure from globally distributed, zero-maintenance public serving.
- **Multi-Format Content Architecture:** Evolved the site beyond reference documentation to house dedicated sections for **engineering write-ups** and **non-technical case studies** (including the page you are reading right now), turning daily engineering work into visible proof of craft.

# Impact

- **Zero-Friction "Commit-to-Publish" Workflow:** Turned personal note-taking into an automated publishing engine—committing a Markdown note triggers Woodpecker CI to build and deploy straight to Cloudflare's edge with zero manual file juggling.
- **Safe Public/Private Isolation:** Maintained strict separation between private working notes and public content inside a single, cohesive workflow without risking accidental data exposure.
- **Controlled Builds, Zero-Maintenance Serving:** Paired full pipeline customization on self-hosted Woodpecker with fast, globally cached frontend delivery on Cloudflare Pages.
- **Scalable Visibility & Personal Brand:** Transformed years of behind-the-scenes engineering notes into a structured, searchable portfolio of guides, engineering write-ups, and case studies.