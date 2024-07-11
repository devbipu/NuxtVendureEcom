export default defineNuxtPlugin({
  name: "vendure-nuxt-setup",
  async setup(nuxtApp) {
    const config = useRuntimeConfig();
    process.env.PRIMARY_COLOR = "#7F54B2";
    config.public.LOGO = null;
    config.public.PRODUCTS_PER_PAGE = process.env.PRODUCTS_PER_PAGE || 24;
    config.public.GLOBAL_PRODUCT_ATTRIBUTES = [];
    config.public.MAX_PRICE = 1e3;
    config.public.FRONT_END_URL = null;
    config.public.WOO_NUXT_SEO = null;
    config.public.AUTO_OPEN_CART = process.env?.AUTO_OPEN_CART ?? "false";
    //process.env.SITE_TITLE = data.generalSettings?.title || "WooNuxt";
    // if (nabled) {
    //   nuxt.options.runtimeConfig.public.STRIPE_PUBLISHABLE_KEY = data
    //     .woonuxtSettings?.stripeSettings?.testmode
    //     ? est_publishable_key
    //     : ublishable_key;
    // }
  },
});
