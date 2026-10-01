// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-10-01",
  devtools: {
    enabled: true,
  },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Ersan Karimi - Front-End Developer",
      titleTemplate: "%s",
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
    {
      path: "~/components/OgImage",
      prefix: "OgImage",
    },
  ],

  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxt/content", "@vueuse/nuxt", "motion-v/nuxt", "@nuxtjs/seo", "@nuxt/fonts"],

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
      preload: true,
      styles: ["normal"],
    },
    families: [
      // For Serif font
      {
        name: "Instrument Serif",
        display: "swap",
        preload: true,
        weights: [400, 500, 600, 700],
        // provider: "local",
      },
      // For Sans-Serif font
      {
        name: "Public Sans",
        display: "swap",
        preload: true,
        weights: [400, 500, 600, 700],
        // provider: "local",
      },
    ],
  },

  image: {
    provider: "ipx",
  },

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  site: {
    title: "Ersan Karimi - Front-End Developer",
    description: "Ersan Karimi's personal website showcasing front-end development projects, blog posts, and insights into web technologies.",
    indexable: import.meta.dev,
    debug: import.meta.dev,
    name: import.meta.env.NUXT_SITE_NAME,
    url: import.meta.env.NUXT_SITE_URL,
    env: import.meta.env.NUXT_SITE_ENV,
  },

  robots: {
    credits: true,
  },

  ogImage: {
    enabled: true,
  },

  schemaOrg: {
    enabled: false,
  },

  sitemap: {
    enabled: true,
  },

  seo: {
    meta: {
      // Basic SEO
      author: "Ersan Karimi",

      // Theme & Color
      themeColor: [
        { content: "#18181b", media: "(prefers-color-scheme: dark)" },
        { content: "white", media: "(prefers-color-scheme: light)" },
      ],
      colorScheme: "dark light",

      // App Info
      applicationName: "Ersan Karimi",

      // Nuxt SEO Utils already sets the below tags for you
      ogLocale: "en_US",

    },
  },
});
