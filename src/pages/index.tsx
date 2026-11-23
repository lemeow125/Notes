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
    title: "Articles",
    tag: "Articles",
    description:
      "Pain points, lessons learned, know-how distilled.",
    link: "/articles",
    cta: "Read Articles →",
  },
  {
    title: "Case Studies",
    tag: "Work",
    description:
      "End-to-end rollouts, constraints, and measurable outcomes.",
    link: "/work/case-studies",
    cta: "Read Case Studies →",
  },
  {
    title: "Engineering Writeups",
    tag: "Work",
    description:
      "System deep-dives, things built, and lessons learned in writing code.",
    link: "/work/engineering-writeups",
    cta: "Explore Writeups →",
  },
];

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <span className={styles.badge}>Infrastructure • Influence • Direction</span>
        <Heading as="h1" className={styles.heroTitle}>
          I run production on constraints given.
        </Heading>
        <p className={styles.heroSubtitle}>
           Be it potatos or an Azure tenant, it stays up. Real-world case studies, engineering deep-dives, and actively used runbooks.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/work/working-with-me">
            Work with me
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
              Looking for something else?
            </Heading>
            <p style={{ margin: 0, opacity: 0.85 }}>
              Check out blog posts or inspect actual services live.
            </p>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--outline button--primary" to="/blog">
              Blog
            </Link>
            <Link className="button button--outline button--secondary" href="https://stats.06222001.xyz">
              API Tracker ↗
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
