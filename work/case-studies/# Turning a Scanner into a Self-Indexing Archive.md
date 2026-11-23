---
title: Turning a Scanner into a Self-Indexing Archive
sidebar_class_name: hidden
date: 2024-01-15
---

> Disclaimer: Commissioned thesis build. I owned the system end-to-end — architecture, backend, frontend, and deployment.

A university records office had a scanner and a filing cabinet, and the gap between them was a person. Every document that came off the scanner had to be opened, read, dated, attributed to a sender, classified, and named by hand before it could be filed. Retrieval worked the same way: if someone wanted a copy, a staff member had to remember the document existed, find it, and pull it. Request intake was paper, and approval lived in signatures.

They wanted the scanner itself to be the intake. A document dropped into a watched folder should appear in the archive already classified, dated, and searchable, with the request-and-release workflow attached to it.

It was commissioned as a thesis system and built solo — a backend platform, a role-aware web frontend, and an on-premises document pipeline that read the scans.

## The Trade-Offs

Reading a scan with a vision model beats text extraction on exactly the documents a records office handles most: letterheads, stamps, and annotations that a text layer flattens away. But a model can be wrong or unreachable, and a pipeline that stalls on a bad scan is worse than no pipeline at all. So enrichment was never allowed to be a hard dependency — when the model fails, the system falls back to conventional OCR and metadata scanning, files the document anyway, and flags it for a human.

The alternative was a cloud OCR and classification service, and in early 2024 that was not a serious option: the hosted services were still rudimentary on stamped and letterheaded forms, the per-page costs added up against a public institution's budget, and every scan would have meant sending student records and personnel memoranda off-site. Inference stayed local — slower to build and more to operate, but the only version a records officer could sign off on.

A model that misfiles a document makes an archive worse than a filing cabinet, because the record is present but unreachable. So the model was never allowed to invent a taxonomy. It classifies against the categories the office already uses, offers new ones only as a deliberate escape hatch, and staff can correct anything afterward.

The last decision was the one that actually determined whether this shipped: hand-rolling the platform and its interface, or standing on existing scaffolding. Hand-rolling would have produced something more bespoke and taken far longer. Scaffolding — a mature backend framework, a modern frontend starter, a component library — meant the effort went into the scan pipeline and the workflow logic instead of the plumbing, and a working, deployable system existed early enough to iterate on with real documents.

## Execution

- **Scanner-to-record pipeline:** A watched folder, a file-system observer, and an enrichment pass that reads the page as an image, then classifies it and extracts the sender, subject, and date. The result is a filed document with its storage path mirroring the office's own taxonomy.
- **Graceful degradation:** Any enrichment failure drops to conventional OCR and metadata scanning, fills safe defaults, files the document, and raises a staff alert naming it. No scan is silently lost, and no queue is blocked by one bad page.
- **Grounded classification:** Candidate categories are drawn from the vocabulary already in the archive, so the system extends the office's filing language rather than importing a generic one. Every extraction is schema-constrained and deterministic.
- **Role-shaped access:** Five roles across clients, staff, head, planning, and administration, each enforced at the API boundary. The important part is what roles cannot see — clients browse a catalogue that carries no file links, while staff and head get the download path and the approval authority.
- **Paperwork that stays paperwork:** The request lifecycle ends in the office's actual forms, generated from request data and printable, with the requester's email standing in as a valid signature. The system outputs a document the office can file, not a screenshot of a database.
- **Feedback to planning:** Service-quality surveys are captured digitally and routed to a planning role that sees only aggregate results — separating the people who act on service quality from the people who handle individual records.
- **Reproducible by default:** One command brings the system up, generates its own schema and data documentation, and captures outbound mail locally so activation, approval, and release can be demonstrated end to end without external services.

## Outcome

- **Zero-touch intake:** Documents go from scanner output to classified, dated, attributed, searchable records without a staff member opening a single file.
- **Retrieval replaces recall:** Search spans document contents alongside type, sender, and date, so finding a record no longer depends on remembering it existed.
- **One lifecycle instead of three:** Request, review, approval, release, and satisfaction feedback live in one system with a defensible audit trail, replacing paper forms, email threads, and a filing cabinet.
- **A build that documents itself:** Schema and data-model documentation are produced by the running system, so the thesis artifacts were a byproduct of working software rather than a separate write-up assembled afterward.
- **Known limits, stated plainly:** Duplicate detection keys on the model's generated title, enrichment reads the opening page rather than the whole document, and the default configuration is a demo posture rather than a hardened deployment.

---