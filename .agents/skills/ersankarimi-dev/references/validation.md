# Tooling and validation boundaries

Inspected on 2026-10-11. Verify package files and installed versions for the current task; declared ranges are not proof of installed or deployed versions.

## Current toolchain

- `package.json`: Nuxt `^4.5.2`, Nuxt UI `^4.11.2`, Nuxt Content `^3.16.1`, Nuxt SEO `5.3.16`, Nuxt Image `^2.1.0`, motion-v, VueUse, Nuxt Fonts, and Takumi core.
- Package manager declaration: `pnpm@12.8.1` with an integrity suffix. Preserve `pnpm-lock.yaml` and inspect workspace overrides before dependency work.
- Content uses `better-sqlite3`; `postinstall` runs `nuxt prepare` and rebuilds this native dependency. Installation has side effects and is not a read-only inspection step.
- ESLint uses Antfu + generated `.nuxt/eslint.config.mjs`; TypeScript references generated `.nuxt/tsconfig.*.json`. Missing generated files can explain tooling failure and are not a reason to edit generated config.
- Local style: two spaces, double quotes, semicolons. Inspect neighboring code and `.editorconfig`; avoid whole-repo formatting for a scoped change.
- No test script or test runner is currently declared. The PR template's test checkboxes are generic; report relevant checks honestly rather than inventing test coverage.

## Known discrepancies to recheck when relevant

| Files | Observed difference | Handling |
| --- | --- | --- |
| `package.json`, `.nvmrc`, CI | Engines require Node `>=24.20.0 <24.21.0`; `.nvmrc` selects `v24.21.0`; CI selects Node 22 | Do not claim a single consistent Node baseline. Resolve the intended version as a tooling task before installation/CI repairs. |
| README versus `app/pages` | README mentions Experience and blog-oriented content; only Home and About routes exist | Use actual route files as implemented behavior. |
| Content versus schema | About body is YAML text while its schema declares an object; Home link includes fields not listed in the button schema | Trace parsed output/types and consumers when the relevant contract changes. |

These observations are not automatic repair tasks. Keep unrelated source and configuration unchanged.

## Checks and authorization

Build, generate, lint, typecheck, dev server, and preview require the user's explicit request for that action. Screen takeover/capture and browser/native-app operation for checking require user permission. Preserve authorization already granted for the ongoing task; do not ask again unnecessarily.

Read-only inspection, link/path checks in documentation, and `rtk git diff --check` can be performed without starting the app. Skill metadata validation checks only the instruction package. Do not infer application health from either.

Available application commands, **only when requested**:

| Purpose | Command | Actual boundary |
| --- | --- | --- |
| Lint | `rtk pnpm lint` | ESLint diagnostics, not runtime behavior |
| Typecheck | `rtk pnpm typecheck` | Nuxt/Vue typing, not rendered content or layout |
| Production build | `rtk pnpm build` | Compilation/build completion, not browser verification |
| Static generation | `rtk pnpm generate` | Generation and prerender output; separate from build |
| Development | `rtk pnpm dev` | Starts a server; permission does not itself grant screen takeover |
| Preview | `rtk pnpm preview` | Serves existing build output; does not build it |

Use `rtk proxy pnpm ...` if a command is unsupported by the RTK wrapper. Report missing prerequisites and failures without silently installing dependencies or starting servers.

## Validation by changed behavior

- Filename-only changes: compare resolved names using the installed Nuxt resolver; check acronym changes, collisions, paths/imports, and documentation. Use a per-command `core.ignorecase=false` Git override to inspect case-only moves on macOS; follow the staging rule in `AGENTS.md` when a commit is requested. Keep special filenames and `OgImage` registration intact. The OG template is `app/components/OgImage/portfolio-dracula.takumi.vue`, addressed as `PortfolioDracula`. Existing generated declarations may be stale after a rename; do not edit them or regenerate without authorization.
- Content/schema: inspect YAML syntax, required fields, collection inclusion, and consumer expectations. If authorized, verify actual collection output and rendering, not just source text.
- Layout/UI: inspect both page consumers for shared changes. When browser verification is authorized, check narrow/wide widths, light/dark modes, header overlap, links, accordions, FAQ tabs, and keyboard interaction relevant to the change.
- SSR/client behavior: check that browser APIs run in events or client-only contexts; route and collection changes need direct-entry/refresh checks when runtime verification is authorized.
- Assets/IPX: confirm referenced source files exist; generated output and image endpoint behavior remain unverified until explicitly checked.
- Avoid adding broad or implementation-mirroring tests for small reversible edits. For logic changes, choose meaningful checks appropriate to the requested scope and existing tools.

## SEO and OG images

- Inspect `nuxt.config.ts` site URL/name/environment settings and page-level `useSeoMeta` separately. Site identity comes from environment variables; do not replace it with an assumed production host or print local values.
- Current config enables OG images and sitemap, disables Schema.org, and prerenders `/` and `/body` with link crawling. `/body` has its own noindex metadata and sitemap exclusion. `site.indexable` currently equals `import.meta.dev`; `site.debug` uses the same expression. Preserve these settings unless indexing/environment changes are requested, and inspect generated output before claiming their public effect.
- The OG template uses Takumi and an explicit inline `filter: 'blur(64px)'`. Browser-compatible CSS is not necessarily renderer-compatible. Inspect renderer support and generated styles when modifying effects; do not substitute Tailwind blur utilities without verifying the output.
- Font families/weights come from `nuxt.config.ts`; the template includes `font-black` while configured weights end at 700. Distinguish font fallback warnings from a failed image render. Change weights only when relevant to the task.
- If server/browser checks are authorized, verify emitted page metadata and request the actual OG URL found there. A successful page render or build does not prove its OG endpoint works; inspect both the response and image for an OG task.

## Git, CI, and release

- CI currently runs on push and performs install, lint, and typecheck; it does not currently run a build or browser tests.
- `.release-it.json` enables GitHub releases and runs typecheck/lint before initialization; npm publishing is disabled. `pnpm release` can create commits/tags and mutate GitHub, so run it only for an explicitly requested release.
- Use the PR template when a PR is requested, remove irrelevant boilerplate, and state actual validation. Do not stage or publish changes as part of ordinary implementation unless requested.
