---
title: Unified Threat Ingestion at Global Scale
sidebar_class_name: hidden
date: 2024-10-18
---

![](_resources/Unified%20Threat%20Ingestion%20at%20Global%20Scale/b0212b8dd880d35571387eb3d45a916f_MD5.jpeg)

Following Kroll’s acquisition of Redscan, the Cyber Risk division already had a foundational threat-management platform in place, but cyber threats were constantly evolving—creating new attack surfaces and pushing enterprise clients to adopt newer security modules across dozens of disconnected tools.

While the core system existed, it needed to both handle massive alert volumes and rapidly ingest modern threat intelligence— utilizing standardized STIX threat feeds, and emerging products from CrowdStrike, SentinelOne, and others—without creating blind spots or compliance bottlenecks.

As Lead Python Developer for Platform ARM, I stepped into an active environment to scale the core ingestion engine and roll out net-new threat intelligence capabilities, supporting over 50 million annual alerts across 2,000+ enterprise customers.

# The Trade-Offs

Evolving a live, mission-critical security platform comes with two major risks: if you move too aggressively to integrate new vendor products and data formats, you risk breaking existing customer pipelines or exposing sensitive data (PII) in a shared environment.

On the flip side, playing it too safe—or failing to ingest new threat signals and industry standards as vendors release new capabilities—leaves clients blind to modern attack vectors, while over-provisioning fixed servers drives up cloud costs.

Instead of rebuilding from scratch or letting legacy constraints slow innovation, I focused on **modernizing the existing pipelines with elastic cloud capacity and modular integrations** while establishing **strict governance, monitoring, and team standards**—allowing us to rapidly ship new threat intelligence capabilities on top of a rock-solid foundation.

# Execution

Over 21 months, I took ownership of the core ingestion domain to both scale existing operations and roll out new threat-detection capabilities:

- **Net-New Threat Intelligence & STIX Rollouts:** Designed and launched ingestion pipelines for emerging security modules and structured threat data—including Indicators of Compromise (IoCs) and standardized STIX feeds—across CrowdStrike, SentinelOne, and 20+ other providers to keep defense capabilities ahead of evolving risks.
- **Elastic Cloud Architecture:** Evolved the alert ingestion engine on serverless cloud infrastructure (Azure Functions) to process 50M+ annual alerts, automatically expanding capacity during sudden threat spikes and scaling down during normal traffic.
- **Governance, Observability & Standards:** Partnered with security governance to enforce strict PII handling and Python standards, while implementing real-time health monitoring (Splunk and Azure alerting) and automated deployment pipelines so new integrations could ship safely.
- **Cross-Team Crisis Leadership:** Served as the central point of contact during a critical alert ingestion outage, coordinating 40+ engineers and security stakeholders across 4+ teams over a weekend to restore full visibility without data loss.

# Outcome

- **Future-Proofed Threat Visibility:** Expanded platform coverage beyond standard alerts by rolling out ingestion for next-generation vendor modules, IoCs, and standardized STIX threat feeds—empowering analysts to correlate and catch emerging threats faster.
- **Brownfield-to-Scale Evolution:** Successfully scaled an existing live platform to reliably process 50M+ annual security alerts across 20+ vendor ecosystems for 2,000+ global enterprise clients.
- **Resilient Incident Response:** Protected client trust and operational continuity during high-pressure production incidents through real-time observability and decisive cross-team leadership.
- **Compliance & Velocity at Scale:** Safeguarded multi-tenant PII data while accelerating new developer ramp-up and integration rollouts through standardized onboarding, documentation, and automated deployments.