<script setup lang="ts">
const { setProducts, products } = useProducts();
const { isQueryEmpty } = useHelpers();
const { storeSettings } = useAppConfig();
const route = useRoute();
const slug = route.params.slug;

const { data } = await useAsyncGql("getSearchProducts", {
  input: {
    groupByProduct: true,
    collectionSlug: slug,
  },
});

setProducts(data.value?.search?.items);

// onMounted(() => {
//   if (!isQueryEmpty.value) updateProductList();
// });

// watch(
//   () => route.query,
//   () => {
//     if (route.name !== "product-category-slug") return;
//     updateProductList();
//   },
// );

const breadcrumb = ref<Array<{ name: string; link: string | null }>>([
  { name: "Categories", link: "/categories" },
]);

// if (product.value.collections.length > 0) {
//   breadcrumb.value.push({
//     name: product.value.collections[0].name,
//     link: "/product-category/" + product.value.collections[0].slug,
//   });
// }
breadcrumb.value.push({
  name: route?.query?.name || slug.replaceAll("-", " "),
  link: null,
});

useHead({
  title: route?.params?.slug.toUpperCase() || "Category",
  meta: [{ hid: "description", name: "description", content: "Category" }],
});
</script>

<template>
  <div class="container relative py-6 xl:max-w-7xl" v-if="products.length">
    <Breadcrumb
      :breadcrumb="breadcrumb"
      class="mb-6"
      v-if="storeSettings.showBreadcrumbOnSingleProduct"
    />
    <!-- <Filters v-if="storeSettings.showFilters" :hide-categories="true" /> -->

    <div class="w-full">
      <!-- <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
        <ProductResultCount />
        <OrderByDropdown
          class="hidden md:inline-flex"
          v-if="storeSettings.showOrderByDropdown"
        />
        <ShowFilterTrigger v-if="storeSettings.showFilters" class="md:hidden" />
      </div> -->
      <ProductGrid />
    </div>
  </div>
</template>
