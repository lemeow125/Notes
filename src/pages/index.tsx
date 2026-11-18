// src/pages/index.tsx
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

type PillarItem = {
  title: string;
  tag: string;
  description: string;
  link: string;
  cta: string;
};

const PILLARS: PillarItem[] = [
  {
    title: "Case Studies",
    tag: "Work",
    description:
      "End-to-end infrastructure rollouts, resource constraints, and measurable outcomes on low-cost hardware.",
    link: "/work/case-studies",
    cta: "Read Case Studies →",
  },
  {
    title: "Engineering Writeups",
    tag: "Work",
    description:
      "Deep-dives into system architecture, networking, CI/CD pipelines, and lessons learned in production.",
    link: "/work/engineering-writeups",
    cta: "Explore Writeups →",
  },
  {
    title: "Guides & Runbooks",
    tag: "Knowledge Base",
    description:
      "Battle-tested command snippets, configuration templates, and step-by-step deployment manuals.",
    link: "/docs/Guides",
    cta: "Browse Docs →",
  },
];

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <span className={styles.badge}>Infrastructure • DevOps • Systems</span>
        <Heading as="h1" className={styles.heroTitle}>
          I run production on potatoes. It stays up.
        </Heading>
        <p className={styles.heroSubtitle}>
          {siteConfig.tagline}. Browse real-world case studies, engineering deep-dives, and reusable deployment runbooks.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/work/case-studies">
            View Case Studies
          </Link>
          <Link className="button button--secondary button--lg" to="/work/engineering-writeups">
            Engineering Writeups
          </Link>
        </div>
      </div>
    </header>
  );
}

function PillarsSection() {
  return (
    <section className={styles.pillarsSection}>
      <div className="container">
        <div className="row">
          {PILLARS.map((item, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <div className={styles.card}>
                <div>
                  <span className={styles.cardTag}>{item.tag}</span>
                  <Heading as="h3" className={styles.cardTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
                <Link to={item.link} className={styles.cardLink}>
                  {item.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinksSection() {
  return (
    <section className={styles.quickSection}>
      <div className="container">
        <div className={styles.quickBox}>
          <div>
            <Heading as="h2" style={{ marginBottom: "0.25rem" }}>
              Looking for raw notes or live systems?
            </Heading>
            <p style={{ margin: 0, opacity: 0.85 }}>
              Check out casual dev logs in the Notes section or inspect live self-hosted service uptime.
            </p>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--outline button--primary" to="/blog">
              Casual Notes
            </Link>
            <Link className="button button--outline button--secondary" href="https://stats.06222001.xyz">
              Live Status Tracker ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Home"
      description="Case studies, engineering writeups, and production deployment guides by Keannu."
    >
      <HeroSection />
      <main>
        <PillarsSection />
        <QuickLinksSection />
      </main>
    </Layout>
  );
}
