// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
  },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Ersan Karimi - Front-End Developer",
      titleTemplate: "%s | Ersan Karimi",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },

  // Nuxt Components Configuration (https://nuxt.com/docs/guide/directory-structure/components)
  components: [
    {
      path: "~/components/ui",
      prefix: "App",
    },
    {
      path: "~/components/layouts",
      prefix: "L",
    },
    {
      path: "~/components/partials",
      prefix: "P",
    },
  ],

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@vueuse/nuxt",
    "motion-v/nuxt",
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  /**
   * Nuxt Icon Configuration
   * See: https://github.com/nuxt/icon?tab=readme-ov-file
   */
  icon: {
    collections: [
      "lucide",
      "simple-icons",
    ],
    // customCollections: [
    //   {
    //     prefix: "custom",
    //     dir: "./app/assets/icons",
    //   },
    // ],
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
      includeCustomCollections: true,
    },
  },

  // Nuxt Font Configuration (https://fonts.nuxt.com)
  fonts: {
    defaults: {
      subsets: ["latin"],
      weights: [400, 700],
      preload: true,
      styles: ["normal"],
    },
    families: [
      // For Serif font
      {
        name: "Instrument Serif",
        display: "swap",
        preload: true,
        weights: [400, 700],
        // provider: "local",
      },
      // For Sans-Serif font
      {
        name: "Public Sans",
        display: "swap",
        preload: true,
        weights: [400, 700],
        // provider: "local",
      },
    ],
  },

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
});
