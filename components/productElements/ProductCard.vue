<script setup lang="ts">
const route = useRoute();
const props = defineProps({
  node: { type: Object, default: null },
  index: { type: Number, default: 1 },
});

const imgWidth = props.node?.featuredAsset?.width || 220;
const imgHeight = Math.round(imgWidth * 1.125);

// example: ?filter=pa_color[green,blue],pa_size[large]
const filterQuery = ref(route.query.filter);
// const paColor = ref(
//   filterQuery.value?.split("pa_color[")[1]?.split("]")[0]?.split(",") || [],
// );

// watch filterQuery
// watch(
//   () => route.query,
//   () => {
//     filterQuery.value = route.query.filter;
//     paColor.value =
//       filterQuery.value?.split("pa_color[")[1]?.split("]")[0]?.split(",") || [];
//   },
// );

const mainImage = computed<string>(
  () => props.node?.featuredAsset?.preview || "/images/placeholder.jpg",
);
</script>

<template>
  <div
    class="relative product-card"
    data-v-inspector="components/productElements/ProductCard.vue:59:3"
  >
    <NuxtLink
      :to="`/product/${decodeURIComponent(node.slug)}`"
      :title="node.name"
    >
      <!-- <SaleBadge :node="node" class="absolute top-2 right-2" /> -->
      <NuxtImg
        v-if="mainImage"
        :width="imgWidth"
        :height="imgHeight"
        :src="mainImage"
        :alt="node.image?.altText || node.name"
        :title="node.image?.title || node.name"
        :loading="index <= 3 ? 'eager' : 'lazy'"
        placeholder
        placeholder-class="blur-xl"
      />
    </NuxtLink>
    <div class="p-2">
      <!-- <StarRating :rating="node.averageRating" :count="node.reviewCount" v-if="storeSettings.showReviews" /> -->
      <NuxtLink
        :to="`/product/${decodeURIComponent(node.slug)}`"
        :title="node.name"
      >
        <h2 class="mb-2 font-light leading-tight">{{ node.name }}</h2>
      </NuxtLink>
      <ProductPrice
        class="text-sm"
        :regular-price="node?.variants[0].price"
        :currencyCode="node?.variants[0].currencyCode"
      />
    </div>
  </div>
</template>

<style lang="postcss">
.product-card img {
  @apply rounded-lg object-top object-cover w-full;
  aspect-ratio: 1/1.125;
}

.product-card:hover {
  h2 {
    @apply text-primary;
  }
}
</style>
