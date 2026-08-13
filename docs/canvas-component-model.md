# Blue Drop Labs Canvas component model

## Summary

- **Design source:** Existing Next.js implementation and YAML content, checked against the live site at <https://www.bluedroplabs.com>.
- **Scope:** Full site shell, all 20 public content routes, five currently generated service routes, the 404 route, and Drupal-driven listing views.
- **Version / date:** Canvas 1.9+ migration baseline, 2026-08-10.
- **Runtime:** Detached Astro SSR frontend backed by a separate Drupal CMS DDEV project.

The legacy site contains 27 page-level component types and 8 rich-content leaf types or helpers. Canvas will preserve the visible patterns while replacing nested object arrays with composable parent/child elements. Drupal menus own navigation; Canvas pages own page composition; Canvas-page listing fields own resource and service indexes.

## Assumptions and open questions

| Item                                                             | Risk   | Decision or follow-up                                                                                                                                  |
| ---------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Responsive behavior between captured desktop/mobile breakpoints  | Low    | Preserve current CSS and verify at 390, 768, 1024, and 1440 px.                                                                                        |
| Long-copy and empty-slot behavior in Canvas                      | Medium | Components collapse empty optional regions; authoring previews expose a minimal placeholder only where a slot would otherwise be impossible to target. |
| Imported media dimensions and dark-mode alternatives             | Medium | Import original assets into Drupal media and retain explicit alt text, width, height, and optional dark image.                                         |
| Resource/service card editorial data                             | High   | Store normalized listing metadata on each Canvas page, query it through JSON:API, and remove copied card arrays from page composition.                 |
| Contact/newsletter endpoints in the eventual hosting environment | Medium | Preserve the existing public form contracts during the Astro conversion; deployment secrets and production endpoints remain environment configuration. |
| Hover, focus, reduced-motion, and keyboard interaction           | Medium | Preserve existing states and add reduced-motion and keyboard verification during parity testing.                                                       |
| The legacy `className` content escape hatch                      | High   | Do not expose it to Canvas. Represent supported visual differences with bounded variants.                                                              |
| Legacy HTML embedded in titles/descriptions                      | Medium | Use formatted-text fields only where inline markup is intentional; keep ordinary labels as plain strings.                                              |

## Region map

| Order | Region                   | Purpose                                                      | Class             |
| ----- | ------------------------ | ------------------------------------------------------------ | ----------------- |
| 1     | Site header              | Brand, primary navigation, mobile navigation, theme controls | navigation/chrome |
| 2     | Page composition         | Route-specific Canvas elements in editorial order            | content           |
| 3     | Listing results          | Live resource/service page summaries and filters from Drupal | content           |
| 4     | Global conversion band   | Shared pre-footer call to action                             | content/chrome    |
| 5     | Site footer              | Secondary menus, newsletter, legal links, theme controls     | navigation/chrome |
| 6     | Consent and integrations | Cookie consent, analytics consent bridge, Turnstile, Marker  | chrome            |

## Component inventory

Reuse is the number of legacy YAML files that use the pattern; `global` means every route.

| `machineName` candidate | Responsibility                                          |  Reuse | Parent region                      | Other plausible contexts               |
| ----------------------- | ------------------------------------------------------- | -----: | ---------------------------------- | -------------------------------------- |
| `homepage-hero`         | Large brand hero with one action                        |      1 | Page composition                   | Campaign landing pages                 |
| `gradient-hero`         | Compact gradient page heading                           |      8 | Page composition                   | Legal, contact, index pages            |
| `detail-page-hero`      | Detail hero with media, metadata, and actions           |     12 | Page composition                   | Services, case studies, platform pages |
| `basic-one-up`          | Two-column media/copy feature                           |      4 | Page composition                   | About, service, product highlights     |
| `section-heading`       | Reusable eyebrow/title/description heading              |    15+ | Child of sections                  | Any content band                       |
| `featured-text`         | Centered statement, quote, or attribution               |      3 | Page composition                   | Testimonials and proof points          |
| `split-text`            | Two-column heading and body                             |      1 | Page composition                   | Introductory narrative sections        |
| `inline-text-block`     | Rich narrative with optional quote/action               |      4 | Page composition                   | Closing arguments and service detail   |
| `text-cta`              | Short statement with optional action                    |      3 | Page composition                   | Interstitial conversion prompts        |
| `cta-band`              | Full-width CTA in stacked or centered form              |      3 | Page composition                   | Campaign and service pages             |
| `cta-block`             | Global-style conversion block                           |      3 | Page composition/global conversion | Any page ending                        |
| `grid-separator`        | Branded visual rhythm separator                         |     18 | Page composition                   | Any page stack                         |
| `icon-collection`       | Layout shell for repeatable icon cards                  |     16 | Page composition                   | Problem, benefit, and feature sets     |
| `icon-card`             | One icon/title/description leaf                         |    70+ | Icon collections                   | Any icon-based collection              |
| `accordion-list`        | Heading plus repeatable disclosure items                |      5 | Page composition                   | FAQ and feature explanation            |
| `accordion-item`        | One accessible disclosure                               |    25+ | Accordion list                     | FAQ or detail lists                    |
| `process-list`          | Ordered process-step shell                              |      2 | Page composition                   | Delivery and onboarding flows          |
| `process-step`          | One process step                                        |    10+ | Process list                       | Any ordered workflow                   |
| `text-list`             | Styled repeatable statement list                        |      2 | Page composition                   | Benefits and capability lists          |
| `text-list-item`        | One formatted list statement                            |    10+ | Text list                          | Any concise list                       |
| `logo-marquee`          | Animated/client-logo strip                              |      1 | Page composition                   | Trust bands                            |
| `logo-item`             | One logo with accessible name                           |      6 | Logo marquee                       | Logo grids and partner bands           |
| `solutions-collection`  | Grid/row layout for solution cards                      |      5 | Page composition                   | Services and related offerings         |
| `solution-card`         | One linked or unlinked visual solution                  |    20+ | Solutions collection               | Service and platform cards             |
| `service-categories`    | Grouped marketing capability layout                     |      1 | Page composition                   | Capability taxonomies                  |
| `service-category`      | One category with a child-card slot                     |      4 | Service categories                 | Capability group                       |
| `service-offering`      | One icon/title/features card                            |     12 | Service category                   | Capability/feature card                |
| `package-list`          | Pricing/package comparison shell                        |      3 | Page composition                   | Hosting and service packages           |
| `package-card`          | One package, features, and action                       |     6+ | Package list                       | Pricing tiers                          |
| `feature-item`          | One feature statement                                   |    30+ | Package/service cards              | Feature lists                          |
| `comparison-table`      | Accessible comparison table shell                       |      1 | Page composition                   | Vendor or plan comparisons             |
| `comparison-row`        | One row with label and bounded column values            |    10+ | Comparison table                   | Comparison data                        |
| `rich-content`          | Article/legal content layout with optional sticky aside |      8 | Page composition                   | Case studies and policies              |
| `rich-text`             | Sanitized formatted prose leaf                          |    30+ | Rich content/other slots           | Narrative content anywhere             |
| `inline-image`          | One Drupal media image with dimensions                  |     3+ | Rich content                       | Article media                          |
| `metrics-grid`          | Repeatable metric shell                                 |      5 | Rich content                       | Results and proof sections             |
| `metric-item`           | One value and explanation                               |    15+ | Metrics grid                       | KPI cards                              |
| `details-aside`         | Sticky labels and CTA beside an article                 |      5 | Rich content                       | Case-study facts                       |
| `detail-group`          | One labelled list in the details aside                  |    10+ | Details aside                      | Metadata facts                         |
| `resource-list`         | Filtered/paginated Drupal Canvas-page query             |      1 | Listing results                    | Resource hubs                          |
| `related-resources`     | Drupal query for related content                        |      5 | Listing results                    | Article/service recommendations        |
| `resource-card`         | One normalized listing result                           |    10+ | Resource listings                  | Search and related content             |
| `main-navigation`       | Drupal main-menu renderer with mobile behavior          | global | Site header                        | Global only                            |
| `site-footer`           | Drupal footer/legal menus plus newsletter               | global | Site footer                        | Global only                            |

## Component tree

Roles are marked as `layout`, `content`, or `leaf`.

```text
site-layout [layout/chrome]
├── main-navigation [layout/navigation; Drupal menu]
├── canvas-page [layout; Drupal Canvas route]
│   ├── one hero [content]
│   │   ├── homepage-hero
│   │   ├── gradient-hero
│   │   └── detail-page-hero
│   └── ordered page elements [content]
│       ├── basic-one-up
│       ├── featured-text | split-text | inline-text-block | text-cta
│       ├── cta-band | cta-block | grid-separator
│       ├── icon-collection [layout]
│       │   ├── section-heading [leaf]
│       │   └── icon-card* [leaf]
│       ├── accordion-list [layout]
│       │   └── accordion-item* [leaf]
│       ├── process-list [layout]
│       │   └── process-step* [leaf]
│       ├── text-list [layout]
│       │   └── text-list-item* [leaf]
│       ├── logo-marquee [layout]
│       │   └── logo-item* [leaf]
│       ├── solutions-collection [layout]
│       │   └── solution-card* [leaf]
│       ├── service-categories [layout]
│       │   └── service-category* [layout]
│       │       └── service-offering* [leaf]
│       ├── package-list [layout]
│       │   ├── package-card* [layout/content]
│       │   │   └── feature-item* [leaf]
│       │   └── feature-item* [leaf; footer benefits]
│       ├── comparison-table [layout/content]
│       │   └── comparison-row* [leaf]
│       ├── rich-content [layout]
│       │   ├── rich-text* | inline-image* [leaf]
│       │   ├── metrics-grid* [layout]
│       │   │   └── metric-item* [leaf]
│       │   └── details-aside [layout]
│       │       └── detail-group* [leaf]
│       ├── resource-list [data/content]
│       │   └── resource-card* [rendered query result]
│       └── related-resources [data/content]
│           └── resource-card* [rendered query result]
├── cta-block [global content]
├── site-footer [layout/navigation; Drupal menus]
└── consent-and-integrations [chrome]
```

`*` means repeatable. Every author-controlled repeatable is a Canvas slot, never an object-array prop. Query results are runtime data and are not Canvas child elements.

## API sketch

Props below are conceptual and ordered as they should appear in Canvas. Images use Canvas image objects/references. CTA labels and URLs remain separate simple props unless noted.

### Heroes and standalone content

| Component           | Implementation style                          | Props                                                                                                                          | Slots and empty behavior                                   |
| ------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| `homepage-hero`     | Variants; unique visual shell                 | `title` formatted text, `description`, `ctaLabel`, `ctaUrl`, `ctaTarget`                                                       | None; title and description have safe defaults in preview. |
| `gradient-hero`     | Variants                                      | `variant`, `eyebrow`, `title`, `description`                                                                                   | None; optional fields collapse.                            |
| `detail-page-hero`  | Variants for `service`, `article`, `platform` | `variant`, `eyebrow`, `title`, `description`, `author`, `date`, `image`, primary/secondary CTA label+URL                       | None; media and action rows collapse independently.        |
| `basic-one-up`      | Variants for alignment                        | `variant`, `alignment`, `eyebrow`, `title`, `description`, `blockquote`, `image`, `darkImage`, primary/secondary CTA label+URL | None; absent media produces a single-column band.          |
| `section-heading`   | Granular props                                | `alignment`, `eyebrow`, `title`, `description`                                                                                 | None; optional copy collapses.                             |
| `featured-text`     | Variants for size/background/quote            | `variant`, `background`, `eyebrow`, `title`, `description`, `author`                                                           | None. Replaces the legacy `className` escape hatch.        |
| `split-text`        | Variants                                      | `variant`, `title`, `description`                                                                                              | None.                                                      |
| `inline-text-block` | Variants                                      | `variant`, `eyebrow`, `title`, `description`, `blockquote`, primary CTA label+URL                                              | None; optional quote/action collapse.                      |
| `text-cta`          | Variants for body/heading treatment           | `variant`, `text`, `ctaLabel`, `ctaUrl`                                                                                        | None.                                                      |
| `cta-band`          | Variants for stacked/centered                 | `variant`, `eyebrow`, `title`, `description`, `text`, `ctaLabel`, `ctaUrl`                                                     | None; supports statement-only form.                        |
| `cta-block`         | Variants                                      | `variant`, `title`, `description`, `ctaLabel`, `ctaUrl`, `ctaTarget`                                                           | None.                                                      |
| `grid-separator`    | Variants                                      | `variant`, `spacing` enum                                                                                                      | None. Decorative and hidden from assistive technology.     |

### Repeatable collections

| Component              | Implementation style                          | Props                                                                                 | Slots and empty behavior                                                                                             |
| ---------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `icon-collection`      | Variants unify legacy grid/list/split layouts | `variant` (`grid`, `list`, `list-grid`, `split`), `columns`, heading props            | `items`: `icon-card` children; empty shows an editor placeholder and collapses publicly.                             |
| `icon-card`            | Variants                                      | `variant`, `icon` enum, `title`, `description`                                        | None.                                                                                                                |
| `accordion-list`       | Variants                                      | `variant`, `title`, `description`                                                     | `items`: `accordion-item`; empty collapses publicly.                                                                 |
| `accordion-item`       | Granular props                                | `title`, `content` formatted text, `openByDefault`                                    | None.                                                                                                                |
| `process-list`         | Variants                                      | `variant`, `title`, `description`                                                     | `items`: `process-step`; empty collapses publicly.                                                                   |
| `process-step`         | Granular props                                | `title`, `description`                                                                | None; ordinal is derived from slot order.                                                                            |
| `text-list`            | Variants                                      | `variant`, `title`, `description`                                                     | `items`: `text-list-item`; empty collapses publicly.                                                                 |
| `text-list-item`       | Granular props                                | `text` formatted text                                                                 | None.                                                                                                                |
| `logo-marquee`         | Variants                                      | `variant`, `description`, `speed`, `pauseOnHover`                                     | `logos`: `logo-item`; empty collapses publicly.                                                                      |
| `logo-item`            | Granular props                                | `logo`, `name`, `url`                                                                 | None. URL is optional.                                                                                               |
| `solutions-collection` | Variants unify row/grid                       | `variant` (`grid`, `row`), heading props, primary CTA label+URL                       | `items`: `solution-card`; empty collapses publicly.                                                                  |
| `solution-card`        | Variants                                      | `variant`, `eyebrow`, `title`, `description`, `image`, `darkImage`, `url`             | None. Unlinked when URL is empty.                                                                                    |
| `service-categories`   | Variants                                      | heading props                                                                         | `categories`: `service-category`; empty collapses publicly.                                                          |
| `service-category`     | Granular props                                | `title`, `description`                                                                | `offerings`: `service-offering`; empty still renders category copy.                                                  |
| `service-offering`     | Variants                                      | `variant`, `icon` enum, `title`                                                       | `features`: `feature-item`; empty renders title/icon only.                                                           |
| `feature-item`         | Granular props                                | `text` formatted text                                                                 | None.                                                                                                                |
| `package-list`         | Variants                                      | heading props, `footerTitle`                                                          | `packages`: `package-card`; `footerItems`: `feature-item`; empty regions collapse independently.                     |
| `package-card`         | Variants including highlighted                | `variant`, `icon` enum, `title`, `description`, `price`, `priceSuffix`, CTA label+URL | `features`: `feature-item`; empty feature slot is allowed.                                                           |
| `comparison-table`     | Granular bounded configuration                | heading props, `caption`, up to three column labels, highlighted column enum          | `rows`: `comparison-row`; empty renders heading only. The bounded column props avoid authoring nested column arrays. |
| `comparison-row`       | Granular bounded configuration                | `label`, up to three formatted cell values                                            | None. Values align to the parent column order.                                                                       |

### Rich content and listings

| Component           | Implementation style               | Props                                                                             | Slots and empty behavior                                                                                                                                                     |
| ------------------- | ---------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rich-content`      | Variants for article/legal layouts | `variant`                                                                         | `content`: rich-text, inline-image, metrics-grid, and other approved editorial children; `aside`: details-aside. Content empty shows an editor placeholder. Aside collapses. |
| `rich-text`         | Granular prop                      | `content` formatted text                                                          | None. Drupal sanitization is authoritative.                                                                                                                                  |
| `inline-image`      | Variants                           | `variant`, `image`, `caption`                                                     | None; image is required.                                                                                                                                                     |
| `metrics-grid`      | Variants                           | `variant`, `title`                                                                | `metrics`: `metric-item`; empty collapses.                                                                                                                                   |
| `metric-item`       | Granular props                     | `value`, `description`                                                            | None.                                                                                                                                                                        |
| `details-aside`     | Variants                           | `variant`, CTA label+URL                                                          | `groups`: `detail-group`; entirely collapses when both groups and CTA are absent.                                                                                            |
| `detail-group`      | Granular props                     | `label`, `items` multiline string                                                 | None. A simple multiline value is acceptable because items have no independent presentation or placement.                                                                    |
| `resource-list`     | Variants                           | `variant`, `listingType`, `pageSize`, filter toggles                              | None. Queries published Canvas pages through the Canvas client/JSON:API; a zero-result state is visible.                                                                     |
| `related-resources` | Variants                           | `variant`, `title`, `listingType`, `limit`, optional topic filter                 | None. Excludes the current page and collapses on zero results.                                                                                                               |
| `resource-card`     | Internal render contract           | Normalized queried fields: title, summary, eyebrow, date, image, URL, type/topics | None. Not independently placed in Canvas because its content is Drupal query output.                                                                                         |

### Global chrome

| Component         | Implementation style     | Props                                     | Slots and empty behavior                                                        |
| ----------------- | ------------------------ | ----------------------------------------- | ------------------------------------------------------------------------------- |
| `main-navigation` | Runtime/global component | Drupal menu name and fallback label       | None. Reads `main`; local fallback prevents a broken shell during CMS downtime. |
| `site-footer`     | Runtime/global component | Drupal menu names, newsletter copy/action | None. Reads footer and legal menus; missing menus collapse by group.            |

## Granularity audit

| Node/group                                        | Result                      | Rationale                                                                                                                                                                                                                                        |
| ------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Three hero components                             | Pass, intentional exception | Their background geometry and information hierarchy differ substantially; merging would create conditional markup rather than a stable variant.                                                                                                  |
| `icon-collection` plus `icon-card`                | Pass after merge            | Four legacy wrappers differed mainly by layout, so one variant-driven parent removes near-duplicates while retaining independently placeable cards.                                                                                              |
| Repeatable lists, cards, metrics, packages, logos | Pass after split            | Each repeated child has independent content and editorial ordering, so each is a slot child rather than an object-array prop.                                                                                                                    |
| `section-heading`                                 | Pass                        | Shared internal leaf reduces copy-schema drift without forcing authors to place it separately in every parent. It may remain an implementation helper rather than a Canvas component if embedded heading props give a clearer editor experience. |
| `comparison-table`                                | Pass, bounded exception     | Columns are structural configuration, not rich repeatable content. A maximum of three columns matches the design; rows remain composable children.                                                                                               |
| `detail-group.items` multiline prop               | Pass, documented exception  | The strings have no independent layout, action, media, or reuse. Splitting them would add tree noise with no authoring value.                                                                                                                    |
| `resource-card`                                   | Pass, runtime-only          | Cards are derived from Drupal listing data. Allowing page authors to place them would reintroduce copied listing content.                                                                                                                        |
| Global navigation/footer                          | Pass, runtime-only          | Menus are governed Drupal data sources and sit outside route-specific Canvas composition.                                                                                                                                                        |
| `grid-separator`                                  | Pass                        | It is a deliberate branded layout primitive used across nearly every page and is meaningful to page authors.                                                                                                                                     |
| Legacy `className`                                | Removed                     | Arbitrary styling props fail the bounded API rule; supported outcomes are explicit variants.                                                                                                                                                     |

All nodes now pass the shared Canvas composability/granularity checks. The intentional bounded exceptions above do not contain independently placeable rich children.

## Implemented baseline

- 41 component contracts and Astro implementations are synchronized to Canvas
  with no manifest warnings.
- 22 page definitions use parent/child slots and are published through the
  restricted `bluedrop_canvas_mcp` workflow.
- Resource and service listings use normalized Canvas-page fields and a tested
  sparse-field JSON:API query.
- Drupal owns page media, menus, and global shell copy; local files are
  migration inputs and outage fallbacks.
- Desktop parity checks cover home, resources, and services against the live
  site. The remaining ongoing work is regression testing at the documented
  responsive breakpoints as components evolve.
