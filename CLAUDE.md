# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site (single-page React app, Create React App, hand-written CSS), deployed to GitHub Pages at https://sharat9703.github.io/profile.

## Commands

```bash
npm install
npm start          # dev server on http://localhost:3000
npm run build      # production build into build/
npm test           # react-scripts (Jest) in watch mode; there are currently no test files
npm run deploy     # predeploy runs build, then gh-pages publishes build/ to the gh-pages branch
```

Linting is CRA's built-in ESLint (`react-app` config), surfaced during `npm start` / `npm run build`; there is no separate lint script.

## Architecture

- `src/App.js` renders a fixed vertical stack: `NavBar` then `Banner` (hero, stats, clients), `About`, `Experience`, `Skills`, `Projects`, `Contact` (includes the footer). Navigation is in-page anchors matched to each section's `id`.
- Content is hardcoded as arrays at the top of each component in `src/Components/`. Editing site content means editing these files.
- `src/links.js` is the single source for external profile URLs and the resume path. Reuse these constants rather than hardcoding URLs.
- The resume is `public/Sharat_Yaragatti_Resume.pdf`, referenced via `process.env.PUBLIC_URL` so it resolves under the `/profile` subpath set by `homepage` in `package.json`. Any other `public/` asset must do the same.
- All styling is in `src/App.css`: design tokens as CSS custom properties on `:root` (ink/vault/rule/paper/slate/brass palette, IBM Plex Sans + Mono loaded from Google Fonts in `public/index.html`), plain class names, CSS grid, breakpoints at 900px and 640px. No CSS framework; icons come from `react-bootstrap-icons`.
- The hero's SWIFT MT103-styled block is the page's one animated element; it respects `prefers-reduced-motion`.

## Branching

Work branches off `development` (`feature/<name>`), merges into `development`, then into `main`. `gh-pages` is the deploy output branch — never edit it by hand.
