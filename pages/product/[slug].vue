<script setup lang="ts">
import type { Variation, Product } from "@@/types";
const route = useRoute();
const { storeSettings } = useAppConfig();
const { arraysEqual, formatArray } = useHelpers();
const slug = route.params.slug as string;

const activeVariation = ref<Variation | null>(null);

const { data: productObj } = (await useAsyncGql("getProduct", {
  slug: slug,
})) as { data: { value: { product: Product } } };

const product = computed(() => productObj.value.product);

if (product.value?.variants?.length) {
  activeVariation.value = product.value.variants[0] || null;
}
</script>

<template>
  <main class="container relative py-6 xl:max-w-7xl">
    <SEOHead :info="product" />

    <Breadcrumb
      :product="product"
      class="mb-6"
      v-if="storeSettings.showBreadcrumbOnSingleProduct"
    />

    <div class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
      <ProductImageGallery
        v-if="product?.assets"
        class="relative flex-1"
        :main-image="product.featuredAsset || {}"
        :gallery="product.assets"
        :node="product"
        :activeVariation="activeVariation || {}"
      />
      <NuxtImg
        v-else
        class="relative flex-1 skeleton"
        src="/images/placeholder.jpg"
        :alt="product?.name || 'Product'"
      />

      <div class="lg:max-w-md xl:max-w-lg md:py-2 w-full">
        <div class="flex justify-between mb-4">
          <div class="flex-1">
            <h1
              class="flex flex-wrap items-center gap-2 mb-2 text-2xl font-sesmibold"
            >
              {{ product?.name }}
            </h1>
            <!-- <StarRating :rating="product.averageRating || 0" :count="product.reviewCount || 0" v-if="storeSettings.showReviews" /> -->
          </div>
          <ProductPrice
            class="text-xl"
            :regular-price="activeVariation?.price"
            :currency-code="activeVariation?.currencyCode || null"
          />
        </div>

        <div class="grid gap-2 my-8 text-sm">
          <div class="flex items-center gap-2">
            <span class="text-gray-400"
              >{{ $t("messages.shop.availability") }}:
            </span>
            <StockStatus :stockStatus="activeVariation?.stockLevel" />
          </div>
          <div class="flex items-center gap-2" v-if="storeSettings.showSKU">
            <span class="text-gray-400">{{ $t("messages.shop.sku") }}: </span>
            <span>{{ activeVariation.sku || "N/A" }}</span>
          </div>
        </div>
        <div class="mb-8 font-light prose" v-html="product.description"></div>
        <hr />
        <form>
          <div
            class="fixed bottom-0 left-0 z-10 flex items-center w-full gap-4 p-4 mt-12 bg-white md:static md:bg-transparent bg-opacity-90 md:p-0"
          >
            <input
              type="number"
              min="1"
              aria-label="Quantity"
              class="bg-white border rounded-lg flex text-left p-2.5 w-20 gap-4 items-center justify-center focus:outline-none"
            /><button
              type="submit"
              class="rounded-lg flex font-bold bg-gray-800 text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus:outline-none disabled flex-1 w-full md:max-w-xs"
              disabled="true"
            >
              <span>Add to Cart</span>
            </button>
          </div>
        </form>
        <div v-if="storeSettings.showProductCategoriesOnSingleProduct">
          <div class="grid gap-2 my-8 text-sm">
            <div class="flex items-center gap-2">
              <span class="text-gray-400"
                >{{ $t("messages.shop.category", 2) }}:</span
              >
              <div class="product-categories" v-if="product.collections">
                <NuxtLink
                  v-for="category in product.collections"
                  :key="category.slug"
                  :to="`/product-category/${decodeURIComponent(category.slug)}`"
                  class="hover:text-primary"
                  :title="category.name"
                >
                  {{ category.name }} <span class="comma">, </span>
                </NuxtLink>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div class="flex flex-wrap gap-4">
          <WishlistButton :product="product" />
          <ShareButton :product="product" />
        </div>
      </div>
    </div>

    <div v-if="product.description" class="my-32">
      <ProductTabs :product="product" />
    </div>
    <div
      class="my-32"
      v-if="product.related && storeSettings.showRelatedProducts"
    >
      <div class="mb-4 text-xl font-semibold">
        {{ $t("messages.shop.youMayLike") }}
      </div>
      <ProductRow
        :products="product.related.nodes"
        class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
      />
    </div>
  </main>
</template>

<style scoped>
.product-categories > a:last-child .comma {
  display: none;
}

input[type="number"]::-webkit-inner-spin-button {
  opacity: 1;
}
</style>
