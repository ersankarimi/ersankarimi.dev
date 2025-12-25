// @ts-check
import antfu from "@antfu/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    vue: true,
    jsonc: true,
    markdown: true,
    stylistic: {
      indent: 2,
      quotes: "double",
      semi: true,
    },
    rules: {
      "no-console": "warn",
    },
    formatters: {
      markdown: "prettier",
      css: "prettier",
      prettierOptions: {
        singleQuote: false,
        semi: true,
        tabWidth: 2,
        useTabs: false,
      },
    },
    ignores: [
      "dist",
      "node_modules",
      ".nuxt",
      "pnpm-lock.yaml",
      ".github/workflows",
      "pnpm-workspace.yaml",
    ],
  }),
);
