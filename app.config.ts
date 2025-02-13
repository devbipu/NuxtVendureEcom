/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: "Vendure",
  shortDescription:
    "This is an example of a Vendure store. It provides a modern, fast, and SEO friendly ecommerce store built with Nuxt and WooCommerce.",
  description: `Vendure is unmatched when it comes to performance and scalability. Reap the benefits of having a online store that out performs all of your competitors. You can edit components to display your own information just like the one you're reading now.`,
  baseUrl: "https://v3.vendure-nuxt.com",
  siteImage: "",
  storeSettings: {
    autoOpenCart: false,
    showReviews: false,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    saleBadge: "percent", // 'percent', 'onSale' or 'hidden'
  },

  Vendure_Nuxt_SEO: [],
});
