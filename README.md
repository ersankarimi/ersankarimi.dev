# ersankarimi.dev

Personal website and portfolio of **Ersan Karimi**, a Front-End Developer based in **Balikpapan, Indonesia**.

Built with **Nuxt 4**, **Nuxt UI**, **Nuxt Content**, and **Nuxt SEO**.

- Live: `https://ersankarimi.vercel.app`
- Contact: `ersankarimi.dev@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/ersankarimi/`
- GitHub: `https://github.com/ersankarimi`

---

## Features

- Simple pages: **Home**, **Experience**, **About**
- Content-driven sections using **Nuxt Content**
- Custom **OG Image** template (`PortfolioDracula`) using Takumi
- Fast UI with Nuxt UI + Iconify icons

---

## Tech Stack

- Nuxt 4
- @nuxt/ui
- @nuxt/content
- @nuxtjs/seo (SEO + OG image utilities)
- @nuxt/image
- motion-v
- TypeScript + ESLint

---

## Requirements

- Node: `>=24.20.0 <24.21.0`
- Package manager: `pnpm`

---

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Open:

- `http://localhost:3000`

---

## Scripts

```bash
pnpm dev        # Start dev server
pnpm build      # Build for production
pnpm preview    # Preview production build
pnpm lint       # Lint
pnpm lint:fix   # Lint + auto-fix
pnpm typecheck  # Type-check
```

---

## Content Structure

### Personal Body Project

The personal workout program is available at `/body`, linked from About but
excluded from the main navigation and sitemap. It is public without login;
`noindex, nofollow` reduces search discovery and is not access control.

Edit **`content/body.yml`** to change the active program. It is the single source
for the schedule, sessions, exercise doses, core, guidance, progression, recovery,
and references. No component edits are needed for ordinary program updates.

```yaml
# Inside a sessions entry:
id: upper-a
title: Upper A
focus: Dada, bahu, dan triceps.
duration: Maks. 40 menit
coreId: core-a
coreOptional: false
notes: []
exercises:
  - name: Push Up
    url: https://fitbod.me/exercises/push-up
    dose: 3 set × 8–15 repetisi
    equipment: Berat badan
    notes: []
```

- Keep IDs unique within each list. `schedule.sessionId` must match a session ID;
  `sessions.coreId` must match a core group ID. Omit these fields when not applicable.
- Array order determines display order. Add/remove sessions, exercises, and
  progression phases as needed; update the summary and related guidance too.
- Doses, durations, and equipment are text, including time-based or per-side
  exercises. Keep `notes: []` for entries without notes.
- Add an optional `alternative` object with `name`, `url`, `dose`, `equipment`,
  and `when` to an exercise when it has a replacement.
- Quote text containing `: `, or use YAML multiline blocks. The collection schema
  is defined in `shared/body-schema.ts`.
- Publish changes through the existing website deployment workflow. Only the
  current program is displayed; older versions remain in Git history.

There is no website editor or workout storage. The **Cetak** action prints the
entire program, including all sessions and guidance regardless of the active tab.

Most of the site content lives under `content/`.

Example structure:

```txt
content/
  index.yml
  about.yml
  experience.yml
  experience/
    anggunpraya.md
    elemesgroup.md
```

> Tip: keep the Home page lightweight and route deeper details into the Experience / About content.

---

## OG Images

This repo uses a custom OG image template:

- `app/components/OgImage/portfolio-dracula.takumi.vue`

You can set OG image per page using:

```ts
defineOgImage("PortfolioDracula", {
  name: "Ersan Karimi",
  role: "Front-End Developer",
  tagline: "I build clean, responsive web UI and enjoy refining the details clarity, consistency, and ease of use.",
  location: "Balikpapan, Indonesia",
  website: "ersankarimi.dev",
  photo: "https://avatars.githubusercontent.com/u/73420137?v=4",
  accent: "#BD93F9",
});
```

---

## Deployment

This project works well on Vercel.

General flow:

```bash
pnpm build
pnpm preview
```

---

## License

This project is personal and not intended as a template distribution.
If you'd like to reuse parts of it, please reach out first.

---

## Credits

- Base template: [Nuxt UI Portfolio Template](https://github.com/nuxt-ui-templates/portfolio)
- UI: [Nuxt UI](https://ui.nuxt.com)
- Framework: [Nuxt](https://nuxt.com)
- Content: [Nuxt Content](https://content.nuxt.com)
- SEO & OG Image: [Nuxt SEO](https://nuxtseo.com)
- Icons: [Iconify (Lucide + Simple Icons)](https://iconify.design)
