<script setup lang="ts">
const { setProducts, updateProductList, products, setTotalProduct } =
  useProducts();
const route = useRoute();
const { storeSettings } = useAppConfig();

const runtimeConfig = useRuntimeConfig();
const { productsPerPage } = useHelpers();

const page = computed(() => route.query.page || 1);

const skip = ref<number>(0);

const { data: productList } = await useAsyncGql("getSearchProducts", {
  input: {
    take: productsPerPage,
    skip: skip,
    groupByProduct: true,
  },
});
setProducts(productList.value?.search?.items);
setTotalProduct(productList.value?.search?.totalItems);
useHead({
  title: `Products`,
  meta: [{ hid: "description", name: "description", content: "Products" }],
});
watch(
  page,
  (d) => {
    skip.value = productsPerPage * page.value;
    console.log(page.value, skip, productsPerPage);
  },
  {
    deep: true,
  },
);
</script>

<template>
  <div class="container flex items-start gap-16" v-if="products?.length">
    <div class="w-full">
      {{ route.query.page }}
      <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
        <ProductResultCount />
        <OrderByDropdown
          class="hidden md:inline-flex"
          v-if="storeSettings.showOrderByDropdown"
        />
        <ShowFilterTrigger v-if="storeSettings.showFilters" class="md:hidden" />
      </div>
      <ProductGrid />
      <!-- <Pagination /> -->
    </div>
  </div>
  <NoProductsFound class="container py-6 text-center" v-else>
    Could not fetch products from your store. Please check your configuration.
  </NoProductsFound>
</template>
