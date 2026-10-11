# Current website architecture

Inspected on 2026-10-11. This is a source-code snapshot, not a claim about the live deployment. Recheck files before relying on details that may change. Paths below are relative to the repository root.

## Sources and rendering

| Concern | Source | Consumer / behavior |
| --- | --- | --- |
| Home content | `content/index.yml` | `app/pages/index.vue`, then Hero → About → WorkExperience → FAQ partials |
| About content | `content/about.yml` | `app/pages/about.vue`, hero/profile and MDC-rendered body |
| Content contracts | `content.config.ts` | `index` and `about` page collections with Zod schemas |
| App shell | `app/app.vue` | `UApp` → `NuxtLayout` → `UMain` → `NuxtPage`; color-dependent theme-color metadata |
| Default layout | `app/layouts/default.vue` | `UContainer`, floating `LHeader`, page slot, `LFooter` |
| Navbar items | `app/utils/links.ts` | Active Home and About links; Experience is commented out |
| Contact/profile/availability | `app/app.config.ts` | Hero and footer; footer social links are also used in Hero |
| Theme | `app/assets/css/main.css`, `app/app.config.ts` | Tailwind/Nuxt UI imports, semantic tokens, slot defaults, font families |
| Animation | `app/constants/index.ts` | `MOTION_OPTIONS`; some Hero/experience animations are local |
| OG image | `app/components/OgImage/PortfolioDracula.takumi.vue` | Page-level `defineOgImage("PortfolioDracula", props)` |
| Error view | `app/error.vue` | Own header/footer, `UError`, and toaster |
| Clipboard | `app/utils/clipboard.ts` | Browser clipboard and success toast; requires client interaction |

The current application has no implemented blog route, Experience route, Body route, backend API, authentication, or workout persistence. Do not infer these features from the README, content descriptions, or commented code.

## Nuxt and content conventions

- Components are registered from `app/components/ui` (`App`), `layouts` (`L`), `partials` (`P`), and `OgImage` (`OgImage`) in `nuxt.config.ts`. Nested names produce components such as `PLandingWorkExperience`.
- Vue files use `<script setup lang="ts">`. Content consumers use generated `IndexCollectionItem` types where applicable.
- Both pages use awaited `useAsyncData`, `queryCollection(...).first()`, and a fatal 404 if the collection result is missing.
- `useSeoMeta` reads the page's `seo` fields with existing title/description fallbacks. Keep that contract when adjusting copy or schema.
- About stores Markdown/MDC text in a YAML multiline `content` value and renders it using `MDC`. Its schema currently declares `content: z.object({})`; this differs from the literal YAML shape. Investigate actual parsing/types when touching this contract rather than blindly rewriting it.
- The button schema lists `to`, while the current Home About link uses `href` and additional UI props. Inspect the parsed result and rendering consumer when working on these links; do not assume every field survives collection validation.
- `content/index.yml` contains the experience entries and FAQ categories; these are sections on Home, not standalone routes.

## Layout and visual conventions

- The default layout uses a `4xl` container via `--ui-container`, side borders from `sm`, and top padding for the floating header.
- The shared header uses a centered, fixed, rounded `UNavigationMenu` with a color-mode button. The footer uses `UFooter` and configured social links.
- Fonts are Public Sans and Instrument Serif. Nuxt UI primary color is violet and neutral color is neutral; custom lavender tokens also exist in CSS.
- Prefer semantic classes such as `text-muted`, `text-toned`, `bg-default`, and `border-default` for shared light/dark UI.
- Preserve existing `:ui` slot overrides unless the requested change needs them adjusted. A Nuxt UI template is a starting point, not a requirement to give every future page the same layout.
- Experience has separate narrow/wide header presentations around `xsUp` (512px). FAQ tabs scroll horizontally. Shared CSS also defines custom `xs`, `mdUp`, `custom`, and `3xl` breakpoints; inspect actual use before changing them.
- Motion uses opacity, scaling, and blur. Avoid copying animated effects into unrelated components merely for consistency.
- Assets currently include `/profile.jpg`, `/favicon.svg`, and company logos in `public/`; Nuxt Image uses IPX.

## Approved future Body Project direction

Confirmed by the user on 2026-10-11; **not implemented in this repository**:

- Centralize the user's personal Body Project at `/body` in this website; it is for the user's own use.
- Keep it out of the portfolio navbar and homepage. Update the existing About reference to the internal destination when migration is requested.
- Retain the existing Body Project design with a dedicated layout, rather than inheriting the portfolio navbar/layout.
- Keep the page publicly accessible without login, add `noindex`, and exclude it from the sitemap. Hidden navigation and indexing controls do not provide access control.

These decisions describe a future task. Do not create `/body`, change its current external About link, edit the source Body Project repository, or change SEO settings merely because this reference exists. Inspect its current source and confirm remaining implementation choices when the user requests migration.
