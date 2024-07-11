// A collection of helper functions.
export function useHelpers() {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();

  const isShowingMobileMenu = useState<boolean>(
    "isShowingMobileMenu",
    () => false,
  );
  const wooNuxtVersionInfo: string = "0.0.0";
  const productsPerPage: number = runtimeConfig.public?.PRODUCTS_PER_PAGE || 24;
  const vendure_Nuxt_SEO = runtimeConfig.public
    ?.Vendure_Nuxt_SEO as VendureNuxtSEOItem[];
  const frontEndUrl =
    runtimeConfig.public?.FRONT_END_URL?.replace(/\/$/, "") || null;
  const isDev: boolean = process.env.NODE_ENV === "development";
  const fallbackImage = "/images/placeholder.jpg";

  return {
    isShowingMobileMenu,
    wooNuxtVersionInfo,
    productsPerPage,
    fallbackImage,
    isDev,
    frontEndUrl,
    vendure_Nuxt_SEO,
  };
}
