# Docusaurus Portfolio

This repository contains my personal portfolio website built with Docusaurus and TypeScript.

The website presents my professional background, technical skills, selected projects, and project documentation in the areas of Linux, Docker, Kubernetes, DevSecOps, CI/CD, IT infrastructure, and security.

The homepage is built from reusable React components combined in `src/pages/index.tsx`. The repository also includes a Docusaurus documentation area with technical documentation for completed Akademie projects.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Build](#build)
- [Deployment](#deployment)
- [Live Website](#live-website)

## Project Structure

```text
.
├── .github/
│   └── workflows/
├── docs/
│   └── projects/
├── src/
│   ├── components/
│   │   ├── contact/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── my-skills/
│   │   └── project-highlights/
│   ├── css/
│   │   └── custom.css
│   └── pages/
│       └── index.tsx
├── static/
│   └── img/
├── docusaurus.config.ts
├── package.json
├── sidebars.ts
└── tsconfig.json
```

## Prerequisites

- Node.js 18+
- npm
- Git

## Quickstart

Clone the repository, install dependencies, and start the development server:

```bash
git clone https://github.com/StevanAleksandrov/docusaurus-portfolio-akademie.git
cd docusaurus-portfolio-akademie
npm install
npm start
```

The local website is available at `http://localhost:3000`.

### How to Start

Docusaurus supports hot reload — saved changes are reflected automatically in the browser.

To run a TypeScript check before building:

```bash
npx tsc --noEmit
```

## Usage

### Site Configuration

Global configuration is managed in `docusaurus.config.ts`. Key settings include:

- `title`, `tagline`, and `favicon` — basic site identity
- `url`, `baseUrl`, `organizationName`, and `projectName` — GitHub Pages deployment settings
- `themeConfig.navbar` and `themeConfig.footer` — navigation and footer configuration

Current deployment values:

```ts
url: 'https://stevanaleksandrov.github.io',
baseUrl: '/docusaurus-portfolio-akademie/',
organizationName: 'StevanAleksandrov',
projectName: 'docusaurus-portfolio-akademie',
```

### Homepage Components

Each homepage section is a separate React component in `src/components/`. Components are imported and combined in `src/pages/index.tsx`.

To add a new section:

1. Create a kebab-case folder inside `src/components/`
2. Add `index.tsx` and a CSS Module if needed
3. Import and place the component in `src/pages/index.tsx`

### Project Documentation

Documentation is stored in `docs/projects/` and includes eight completed projects. The sidebar is configured in `sidebars.ts`.

## Build

```bash
npm run build
```

Generated files are stored in `build/`. To preview locally:

```bash
npm run serve
```

## Deployment

The portfolio deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

GitHub Pages setup:

1. Open **Settings → Pages**
2. Set source to **GitHub Actions**
3. Push to `main` and verify the workflow in the **Actions** tab

## Live Website

[https://stevanaleksandrov.github.io/docusaurus-portfolio-akademie/](https://stevanaleksandrov.github.io/docusaurus-portfolio-akademie/)