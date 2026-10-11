# Codex project instructions

## Scope and working agreement

- Work in this repository only unless the user expands the scope. This is Ersan's personal website, currently a portfolio built from a Nuxt UI template.
- Discussion-only requests such as “talk dulu”, “brainstorming”, or “jangan edit” mean no file changes. Ask a focused question when an unresolved requirement materially changes the implementation; proceed with routine choices within the authorized scope.
- Preserve unrelated local changes. Inspect Git status before edits and review the final diff. Do not stage, commit, push, release, or deploy unless requested.
- Respond in the user's language, usually Indonesian. Report the outcome, affected files, actual checks, and remaining limitations concisely.

## Commands and user control

- Follow `/Users/sulee/.codex/RTK.md` on this machine. Prefix shell commands with `rtk`; use `rtk proxy` for commands without a native wrapper. If RTK is unavailable elsewhere, report it and use the available equivalent.
- Run build, generate, lint, typecheck, dev server, or preview only when the user explicitly requests the relevant action. Prior authorization for the same ongoing task remains valid.
- Do not install dependencies, run formatters, or add a test runner as an incidental part of an unrelated change. Read-only file inspection and Git diff checks are permitted.
- Ask before taking over, capturing, or operating the user's screen, browser, or native apps for verification. A coding request alone does not authorize screen takeover. Do not repeatedly ask when the user has already granted that scope for the task.
- Never present a static review as proof of runtime behavior, visual correctness, responsive behavior, generated HTML, or OG rendering.

## Repository entry points

- App shell: `app/app.vue`; portfolio layout: `app/layouts/default.vue`; personal workout layout: `app/layouts/body.vue`.
- Current routes: Home (`/`), About (`/about`), and personal Body Project (`/body`). Navigation lives in `app/utils/links.ts`; `/body` intentionally stays out of it.
- Content: `content/index.yml`, `content/about.yml`, `content/body.yml`; collections: `content.config.ts`; workout schema: `shared/body-schema.ts`.
- Shared UI/contact configuration: `app/app.config.ts`; design tokens and fonts: `app/assets/css/main.css`.
- Component registration in `nuxt.config.ts`: `App` for UI, `L` for layouts, `P` for partials, `OgImage` for OG templates. Nuxt UI components use `U`.
- Read the project skill at [.agents/skills/ersankarimi-dev/SKILL.md](.agents/skills/ersankarimi-dev/SKILL.md) for implementation or review; load only the references needed for the task.

## Component naming and folder organization

Use **general → specific** naming: registered prefix → domain → component → part → variant. Prefer clarity over mechanical consistency, and keep structure simple until actual complexity justifies grouping.

### Naming and ownership

- Evaluate the **resolved component name**, not the filename alone. Preserve the registered `App`, `L`, `P`, and `OgImage` prefixes; `U` belongs to Nuxt UI. Do not change component registration merely to match an unprefixed example.
- Name tightly coupled children after their parent in the resolved namespace: `PLandingWorkExperience` → `PLandingWorkExperienceItem`, or `AppTable` → `AppTableHeader`. Avoid reversed names such as `AppHeaderTable` or `PRowGuestTable`.
- Define ownership by purpose, not merely by which component renders another. `AppColorModeButton` stays reusable even though `LHeader` renders it; do not rename it as a header-specific child.
- Generic reusable components belong in `ui` without a feature prefix, e.g. `ui/badge.vue` → `AppBadge`. Components meaningful only within a domain keep that domain, e.g. `partials/guest/table/row.vue` → `PGuestTableRow`.
- Use lowercase **kebab-case for project-owned file and folder names**, e.g. `hero.vue`, `work-experience.vue`, `color-mode-button.vue`, and `work-experience/`. This is a filesystem convention, not snake_case or a change to code symbols: keep template names PascalCase and functions/variables in their existing TypeScript/Vue casing.
- Preserve special framework/tooling names and suffixes, including `index.vue`, `app.vue`, `error.vue`, `nuxt.config.ts`, `content.config.ts`, `app.config.ts`, `package.json`, and `.client.vue`/`.server.vue` suffixes when used. Keep the OG integration directory `OgImage` and renderer suffix `.takumi.vue`, with the template filename `portfolio-dracula.takumi.vue`. Keep standardized instruction/documentation names such as `AGENTS.md`, `SKILL.md`, `README.md`, `CHANGELOG.md`, `LICENSE`, and GitHub templates; do not rename generated/dependency files or historical changelog references.
- Apply kebab-case to new composable, utility, schema, and other supporting filenames. For example, `app/composables/use-body-program.ts` exports `useBodyProgram`, while `shared/body-schema.ts` exports `bodySchema`. Preserve the `use` prefix for composable functions. There are currently no custom composables to rename; do not create one just to demonstrate the convention.

### Single components and component families

- A standalone component remains one file. Keep `ui/color-mode-button.vue` or `ui/badge.vue`; do not create a folder containing only `index.vue` for hypothetical future children.
- When several actual files form a tightly coupled family, prefer a folder under the appropriate category/domain. For example, if WorkExperience gains its own extracted Item and Header, prefer `partials/landing/work-experience/{index,item,header}.vue` over scattered `work-experience.vue`, `work-experience-item.vue`, and `work-experience-header.vue`.
- Domain folders can group related standalone components without defining a root component. The current `partials/landing/{hero,about,work-experience,faq}.vue` is valid; it does not require a `landing/index.vue`.
- Use `index.vue` only when a family folder has a real parent/root component. Do not create a root merely to aggregate sibling files, and do not use both `table.vue` and `table/index.vue` when they resolve to the same name.
- Let the directory provide context: prefer `ui/table/header.vue` to `ui/table/table-header.vue` or `ui/table/app-table-header.vue`. Nuxt may deduplicate repeated segments, but redundant filenames still obscure ownership and are not the preferred convention.
- Add nested family folders only when they group actual related files, such as `table/cell/{index,action}.vue`. Do not mirror every rendered DOM/component level with directories such as `table/body/row/cell/content/index.vue`.
- Reuse existing Nuxt UI primitives before creating custom generic wrappers. The examples below illustrate naming if a custom component is needed; they are not a request to build replacements for `UTable`, `UButton`, or `UModal`.

### Directory-based namespaces in this repository

`nuxt.config.ts` registers separate component roots with prefixes and does not disable `pathPrefix`. Paths below are relative to `app/components/`; the registered category root itself is replaced by its prefix in the resolved name.

| Path | Resolved name | Status |
| --- | --- | --- |
| `ui/color-mode-button.vue` | `AppColorModeButton` | Existing standalone |
| `layouts/header.vue` | `LHeader` | Existing layout component |
| `partials/landing/hero.vue` | `PLandingHero` | Existing domain component |
| `ui/table/index.vue` | `AppTable` | Example family root |
| `ui/table/header.vue` | `AppTableHeader` | Example tightly coupled part |
| `ui/table/cell/index.vue` | `AppTableCell` | Example nested family root |
| `ui/table/cell/action.vue` | `AppTableCellAction` | Example nested part |
| `partials/landing/work-experience/index.vue` | `PLandingWorkExperience` | Example preserving current parent name |
| `partials/landing/work-experience/item.vue` | `PLandingWorkExperienceItem` | Example parent-owned child |
| `partials/guest/table/index.vue` | `PGuestTable` | Example domain family root |
| `partials/guest/table/empty-state.vue` | `PGuestTableEmptyState` | Example domain-owned part |

### Checklist for creating or moving components

1. Identify the domain/parent and whether the component is genuinely reusable or tightly coupled.
2. Choose the existing registered root and the smallest structure: one file for a standalone component; a grouped folder for a real family.
3. Check casing, namespace contribution, general → specific ordering, parent-prefix inheritance, redundant segments, and collisions with existing components.
4. Keep related files discoverable together; justify additional nesting by actual ownership/grouping value.
5. Inspect `nuxt.config.ts`, current usages, explicit imports, and existing generated declarations in `.nuxt/components.d.ts` when available. Generated declarations may be stale and do not prove a hypothetical path resolves correctly. If generation/runtime verification is needed, follow the existing user-authorization rules; never edit generated declarations.
6. For an authorized move, update every affected template, import, and other component-name reference. Do not mass rename/refactor existing components as part of an instruction-only task.
7. Use a temporary filename for case-only renames on case-insensitive filesystems. Git with `core.ignorecase=true` can hide those moves: inspect with `rtk proxy git -c core.ignorecase=false status --short`; when staging is explicitly requested, record case-only moves in the index using two-step `git mv` (old tracked name → temporary name → lowercase destination), even if the filesystem name has already changed. Do not change persistent Git configuration or stage changes merely to expose a rename. Compare resolved names before/after, including acronyms: `faq.vue` resolves to `PLandingFaq`, not `PLandingFAQ`. Update references for any changed resolved name without changing behavior.

## Implementation boundaries

- Follow the actual code and package configuration when README examples disagree. Recheck version-sensitive behavior against the installed dependency and official documentation when needed.
- Prefer existing Nuxt UI components, semantic Tailwind tokens, and local component patterns. Preserve the current layout and content unless the task asks to change them.
- Keep copy in its existing content/config source. Do not invent experience, availability, personal claims, or external links.
- Inspect the collection schema and its consumers together when changing content fields. Keep Nuxt data loading compatible with SSR; browser APIs belong in client interactions or guarded client code.
- Treat edits to global CSS, `app.config.ts`, the shared layout, motion constants, or SEO configuration as changes affecting both current pages. Check their consumers without broadening the task into unrelated cleanup.
- Never edit generated `.nuxt`, `.output`, `.data`, or dependency files as the fix. Do not expose local environment values in output or tracked documentation.

## Personal Body Project

- `/body` uses a dedicated layout and the website's existing Nuxt UI design system, not the old standalone HTML styling. Its About link is internal; it is public without login, has `noindex, nofollow`, and is excluded from sitemap/navigation/homepage.
- `content/body.yml` is the single active program. Keep IDs/references valid, preserve YAML order, and make program changes in content rather than hardcoding doses, counts, days, or phases in components.
- Keep session-associated core and alternatives, plus full-program printing independent of selected tabs/closed guidance. No tracker, persistence, archive UI, or editor is implemented.
- Do not edit the original Body Project repository as part of website maintenance. Changes to the workout prescriptions require a content request, not merely a UI task.

## Code Review Rules

- Flag broken content/schema contracts, missing-content failures, incorrect route or navigation assumptions, and browser-only APIs executing during SSR.
- Check shared UI changes for consequences on Home, About, light/dark colors, and narrow screens. Identify unverified visual behavior explicitly.
- For SEO or OG changes, distinguish configuration intent from emitted metadata and renderer output. Do not silently change production indexing, site URL, renderer, or font configuration to resolve an unrelated issue.
- Focus findings on actionable behavior within the diff; do not treat the template's hypothetical features or stale README examples as implemented requirements.
