import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",

  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
    // pageTransition: { name: "page", mode: "out-in" },
    pageTransition:
      process.env.NODE_ENV === "production"
        ? {
            name: "page",
            mode: "out-in",
          }
        : false,
  },

  experimental: {
    sharedPrerenderData: true,
  },

  components: [{ path: resolve("./components"), pathPrefix: false }],

  modules: [
    "nuxt-graphql-client",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],

  runtimeConfig: {
    public: {
      GQL_HOST: "https://shop.naviq.com/shop-api/", // overwritten by process.env.GQL_HOST
      LOGO: "/logo.png",
      "graphql-client": {
        clients: {
          default: {
            host: process.env.GQL_HOST || "http://localhost:8000/graphql",
            corsOptions: { mode: "cors", credentials: "include" },
          },
        },
      },
    },
  },

  // Multilingual support
  i18n: {
    locales: [
      { code: "en_US", file: "en-US.json", name: "English 🇺🇸" },
      { code: "de_DE", file: "de-DE.json", name: "Deutsch 🇩🇪" },
      { code: "es_ES", file: "es-ES.json", name: "Español 🇪🇸" },
      { code: "fr_FR", file: "fr-FR.json", name: "Français 🇫🇷" },
      { code: "it_IT", file: "it-IT.json", name: "Italiano 🇮🇹" },
      { code: "pt_BR", file: "pt-BR.json", name: "Português 🇧🇷" },
    ],
    langDir: "locales",
    defaultLocale: "en_US",
    strategy: "no_prefix",
  },
});
