<script setup lang="ts">
const { setProducts, updateProductList, products } = useProducts();
const route = useRoute();
const { storeSettings } = useAppConfig();

const runtimeConfig = useRuntimeConfig();
const { productsPerPage } = useHelpers();

// const { data: products } = await useFetch("/api/popular-products");

// onMounted(() => {
//   if (!isQueryEmpty.value) updateProductList();
// });
// console.log(typeof );
const { data: productList } = await useAsyncGql("GetProducts", {
  take: 50,
});
setProducts(productList.value?.products?.items);
console.log(productList.value?.products?.items);
useHead({
  title: `Products`,
  meta: [{ hid: "description", name: "description", content: "Products" }],
});

// watch(
//   () => route.query,
//   () => {
//     if (route.name !== "products") return;
//     updateProductList();
//   },
// );
</script>

<template>
  <div class="container flex items-start gap-16" v-if="products?.length">
    <div class="w-full">
      <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
        <ProductResultCount />
        <OrderByDropdown
          class="hidden md:inline-flex"
          v-if="storeSettings.showOrderByDropdown"
        />
        <ShowFilterTrigger v-if="storeSettings.showFilters" class="md:hidden" />
      </div>
      <ProductGrid />
    </div>
  </div>
  <NoProductsFound class="container py-6 text-center" v-else>
    Could not fetch products from your store. Please check your configuration.
  </NoProductsFound>
</template>
