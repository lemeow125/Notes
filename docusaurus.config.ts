// docusaurus.config.ts
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Keannu",
  favicon: "img/favicon.ico",

  url: "https://blog.06222001.xyz",
  baseUrl: "/",

  organizationName: "lemeow125",
  projectName: "notes",

  onBrokenLinks: "warn",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
    mermaid: true,
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Notes & Blog",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "work-pages",
        path: "./work/working-with-me",
        routeBasePath: "work/working-with-me",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "work-case-studies",
        routeBasePath: "work/case-studies",
        path: "./work/case-studies",
        blogTitle: "Case Studies",
        blogDescription: "Real-world infrastructure deployments and outcomes",
        blogSidebarTitle: "Case Studies",
        blogSidebarCount: "ALL",
        showReadingTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "work-engineering",
        routeBasePath: "work/engineering-writeups",
        path: "./work/engineering-writeups",
        blogTitle: "Engineering Writeups",
        blogDescription: "Architecture deep-dives, post-mortems, and benchmarks",
        blogSidebarTitle: "Engineering Writeups",
        blogSidebarCount: "ALL",
        showReadingTime: true,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Keannu",
      logo: {
        alt: "Keannu Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "dropdown",
          label: "Work",
          position: "left",
          items: [
            {
              label: "Work with me",
              to: "/work/working-with-me",
            },
            {
              label: "Case Studies",
              to: "/work/case-studies",
            },
            {
              label: "Engineering Writeups",
              to: "/work/engineering-writeups",
            },
          ],
        },
        { to: "/docs", label: "Docs", position: "left" },
        { to: "/docs/Guides", label: "Guides", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://stats.06222001.xyz",
          label: "Status",
          position: "right",
        },
        {
          href: "https://github.com/lemeow125/Notes",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Work",
          items: [
            { label: "Working with me", to: "/work/working-with-me" },
            { label: "Case Studies", to: "/work/case-studies" },
            { label: "Engineering Writeups", to: "/work/engineering-writeups" },
          ],
        },
        {
          title: "Knowledge Base",
          items: [
            { label: "Guides", to: "/docs/Guides" },
            { label: "Command Snippets", to: "/docs/Command Snippets" },
            { label: "Files & Links", to: "/docs/Files & Links" },
          ],
        },
        {
          title: "Links",
          items: [
            { label: "API", href: "https://stats.06222001.xyz" },
            { label: "GitHub", href: "https://github.com/lemeow125/Notes" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Keannu.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
