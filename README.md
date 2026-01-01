# ersankarimi.dev

Personal website and portfolio of **Ersan Karimi** — a Front-End Developer based in **Balikpapan, Indonesia**.

Built with **Nuxt 4**, **Nuxt UI**, **Nuxt Content**, and **Nuxt SEO**.

- Live: `https://ersankarimi.vercel.app`
- Contact: `ersankarimi.dev@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/ersankarimi/`
- GitHub: `https://github.com/ersankarimi`

---

## Features

- Simple pages: **Home**, **Experience**, **About**
- Content-driven sections using **Nuxt Content**
- Custom **OG Image** template (`PortfolioDracula`) using Satori
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

- Node: `>=22.21.1 <23.0.0`
- Package manager: `pnpm`

---

## Getting Started

Install dependencies:

```bash
pnpm install
````

Run development server:

```bash
pnpm dev
```

Open:

* `http://localhost:3000`

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

* `components/OgImage/PortfolioDracula.vue`

You can set OG image per page using:

```ts
defineOgImageComponent("PortfolioDracula", {
  name: "Ersan Karimi",
  role: "Front-End Developer",
  tagline: "I build clean, responsive web UI and enjoy refining the details—clarity, consistency, and ease of use.",
  location: "Balikpapan, Indonesia",
  website: "ersankarimi.dev",
  photo: "https://avatars.githubusercontent.com/u/73420137?v=4",
  accent: "#BD93F9",
})
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
