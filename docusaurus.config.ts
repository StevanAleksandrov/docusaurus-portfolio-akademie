import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Stevan Aleksandrov',
  tagline: 'DevSecOps Portfolio and Project Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://stevanaleksandrov.github.io',
  baseUrl: '/docusaurus-portfolio-akademie/',

  organizationName: 'StevanAleksandrov',
  projectName: 'docusaurus-portfolio-akademie',

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
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Stevan Aleksandrov',
      items: [
        {
          to: '/',
          label: 'Back to portfolio',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Stevan Aleksandrov`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;