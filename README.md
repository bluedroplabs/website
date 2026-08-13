# Blue Drop Labs frontend

Detached Astro SSR frontend for the Blue Drop Labs Drupal Canvas site. Drupal
runs in the sibling `../cms` DDEV project; this repository never starts or
embeds a PHP server.

## Local development

Requirements:

- Node.js 22.12 or newer
- DDEV and Docker
- The sibling `../cms` project

Start Drupal first:

```bash
cd ../cms
ddev start
```

Then start Astro:

```bash
cd ../website
npm ci
npm run dev
```

The frontend is available at <http://localhost:4321>. The local environment
uses `CANVAS_SITE_URL=http://bluedrop-cms.ddev.site`; copy `.env.example` to a
local `.env` when bootstrapping a new checkout.

## Content architecture

- Drupal Canvas owns the 22 published page compositions and their media.
- The Drupal `main` and `footer` menus own global links.
- Global branding, footer/newsletter copy, copyright, and the pre-footer CTA
  are editable at `/admin/config/bluedrop/site-content` in Drupal.
- Resource and service indexes query normalized Canvas-page listing fields
  through JSON:API at request time.
- YAML files remain fallback/migration inputs; they are not the primary live
  content source.
- Astro renders the published Canvas `/404` page with an HTTP 404 response for
  unknown routes.

The component rationale and tree are documented in
[`docs/canvas-component-model.md`](docs/canvas-component-model.md). CMS and MCP
operations are documented in
[`../cms/docs/canvas-headless.md`](../cms/docs/canvas-headless.md).

## Useful commands

```bash
npm run dev
npm run build
npm run start
npm run type:check
npm run lint
npm run format:check
npm run test:run
npm run build-storybook
bash tests/run-astro-ddev-smoke.sh
```

`npm run build` regenerates the Canvas component manifest and currently
discovers 41 headless components with no warnings. The smoke test requires the
Drupal DDEV project to be running.

## Regenerating migration artifacts

```bash
node scripts/prepare-canvas-media.mjs
node scripts/generate-canvas-pages.mjs
cd ../cms
ddev bluedrop-canvas-import-all
```

The generated specs under `pages/` are migration/reprovisioning artifacts.
Normal editorial changes should be made in Drupal Canvas.
