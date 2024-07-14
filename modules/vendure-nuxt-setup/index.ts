// `nuxt/kit` is a helper subpath import you can use when defining local modules
// that means you do not need to add `@nuxt/kit` to your project's dependencies
import { createResolver, defineNuxtModule, addServerHandler } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "hello",
  },
  setup(_, nuxt) {
    process.env.PRIMARY_COLOR = "#7F54B2";
    // nuxt.options.runtimeConfig.public.LOGO = null;
    nuxt.options.runtimeConfig.public.PRODUCTS_PER_PAGE =
      process.env.PRODUCTS_PER_PAGE || 24;
    nuxt.options.runtimeConfig.public.GLOBAL_PRODUCT_ATTRIBUTES = [];
    nuxt.options.runtimeConfig.public.MAX_PRICE = 1e3;
    nuxt.options.runtimeConfig.public.FRONT_END_URL = null;
    nuxt.options.runtimeConfig.public.WOO_NUXT_SEO = null;
    nuxt.options.runtimeConfig.public.AUTO_OPEN_CART =
      process.env?.AUTO_OPEN_CART ?? "false";
    //process.env.SITE_TITLE = data.generalSettings?.title || "WooNuxt";
  },
});
