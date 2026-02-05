import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Keycloak Enterprise Training',
  tagline: 'Production-grade Identity & Access Management with Keycloak',
  favicon: 'img/favicon.ico',

  // GitHub Pages deployment
  url: 'https://furqanshaikh.github.io',
  baseUrl: '/keycloak/',
  organizationName: 'furqanshaikh',
  projectName: 'keycloak',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // docs at site root
          editUrl: 'https://github.com/furqanshaikh/keycloak/edit/main/',
        },
        blog: false, // you can enable later
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Keycloak Training',
      logo: {
        alt: 'Keycloak Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Course',
          to: '/',
          position: 'left',
        },
        {
          label: 'Labs',
          to: '/labs',
          position: 'left',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/furqanshaikh/keycloak',
          position: 'right',
        },
        {
          label: 'Official Docs',
          href: 'https://www.keycloak.org/docs/latest/',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Training',
          items: [
            { label: 'Modules', to: '/' },
            { label: 'Labs', to: '/labs' },
            { label: 'Capstone Project', to: '/capstone' },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Keycloak Docs',
              href: 'https://www.keycloak.org/docs/latest/',
            },
            {
              label: 'OAuth 2.0',
              href: 'https://oauth.net/2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/furqanshaikh',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Furqan Shaikh`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
