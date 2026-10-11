---
name: ersankarimi-dev
description: "Implement, investigate, or review the ersankarimi.dev personal Nuxt website using its current content collections, Nuxt UI layout, component prefixes, and SEO/OG setup. Use for work in this repository; do not apply its conventions to other projects."
---

# Ersan Karimi personal website

Read the repository's root `AGENTS.md` first. This skill supports the existing website; it does not authorize a redesign, dependency upgrade, migration, deployment, or user-screen control.

## Choose the relevant reference

- For page, content, component, layout, styling, or routing work, read [references/architecture.md](references/architecture.md). Its final section describes the implemented personal Body Project and editing workflow.
- For checks, tooling, dependency alignment, CI, SEO, OG images, or debugging, read [references/validation.md](references/validation.md).
- For a focused copy edit, read the relevant content file and its consumer; do not load all references automatically.

## Work on the existing flow

1. Identify the requested behavior and inspect the relevant source and Git status. Respect discussion-only scope and preserve unrelated edits.
2. Trace the flow from YAML/config through collection schema and page into the rendering component. For shared changes, identify consumers before editing.
3. Make a coherent change at the existing source of truth. Reuse Nuxt UI and local patterns where appropriate; do not move content into hardcoded templates or add abstractions without a concrete need.
4. Review the diff and perform only authorized checks. Build/lint/typecheck/server and user-screen verification have explicit user-control rules in `AGENTS.md`.
5. Report behavior changed, files affected, checks actually completed, and what remains unverified. Do not claim the skill validator proves application correctness.

## Task-specific decisions

- Content changes: preserve factual copy, outbound destinations, YAML multiline semantics, and MDC rendering; inspect schema mismatches instead of assuming arbitrary UI props pass through.
- Component creation/moves: apply the root `AGENTS.md` section “Component naming and folder organization” as the source of truth. Use kebab-case filenames/folders while preserving PascalCase resolved names and idiomatic code symbols; respect the documented framework exceptions. Check registered prefixes, acronym resolution, and name collisions; keep standalone components as files and group actual tightly coupled families without redundant parent names or speculative nesting.
- Supporting files: use kebab-case for composable/util/schema filenames, e.g. `use-body-program.ts` exporting `useBodyProgram`. Filename convention does not authorize changing function or variable casing, adding speculative composables, or renaming standardized framework/tooling files.
- UI changes: retain the page's existing responsive and color-mode intent. Global slot overrides and design tokens affect multiple consumers; use a local override for a local requirement when practical.
- New routes: choose content storage and layout according to the actual page need. Route creation does not automatically imply navbar inclusion. Confirm discovery/indexing intent when unresolved.
- SEO/OG changes: inspect page metadata, `nuxt.config.ts`, and the Takumi template as separate parts of the flow. Use the validation reference for renderer and environment caveats.
- Tooling changes: reconcile package constraints, Node selection, CI, and native dependencies before changing versions. Do not use a tooling discrepancy as permission for an unrelated upgrade.
