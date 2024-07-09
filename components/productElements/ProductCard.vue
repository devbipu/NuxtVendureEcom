<script setup lang="ts">
const route = useRoute();
const props = defineProps({
  node: { type: Object, default: null },
  index: { type: Number, default: 1 },
});

const imgWidth = 220;
const imgHeight = Math.round(imgWidth * 1.125);

// example: ?filter=pa_color[green,blue],pa_size[large]
const filterQuery = ref(route.query.filter);
const paColor = ref(
  filterQuery.value?.split("pa_color[")[1]?.split("]")[0]?.split(",") || [],
);

// watch filterQuery
watch(
  () => route.query,
  () => {
    filterQuery.value = route.query.filter;
    paColor.value =
      filterQuery.value?.split("pa_color[")[1]?.split("]")[0]?.split(",") || [];
  },
);

const mainImage = computed<string>(
  () =>
    props.node?.image?.producCardSourceUrl ||
    props.node?.image?.sourceUrl ||
    "/images/placeholder.jpg",
);
const imagetoDisplay = computed<string>(() => {
  if (paColor.value.length) {
    const activeColorImage = props.node?.variations?.nodes.filter(
      (variation) => {
        const hasMatchingAttributes = variation.attributes.nodes.some(
          (attribute) =>
            paColor.value.some((color) => attribute.value.includes(color)),
        );
        const hasMatchingSlug = paColor.value.some((color) =>
          variation.slug.includes(color),
        );
        return hasMatchingAttributes || hasMatchingSlug;
      },
    );
    if (activeColorImage?.length)
      return (
        activeColorImage[0].image?.producCardSourceUrl ||
        activeColorImage[0].image?.sourceUrl ||
        mainImage.value
      );
  }
  return mainImage.value;
});
</script>

<template>
  <div
    class="relative product-card"
    data-v-inspector="components/productElements/ProductCard.vue:59:3"
  >
    <NuxtLink
      :to="`/product/${decodeURIComponent(node.slug)}`"
      :title="node.name"
      ><!-- <SaleBadge :node="node" class="absolute top-2 right-2" /> --><img
        onerror="this.setAttribute('data-error', 1)"
        width="220"
        height="248"
        alt="DNK Black Shoes"
        loading="eager"
        data-nuxt-img=""
        title="sports-shoe5"
        src="https://placehold.co/220x270/000000/FFF"
      />
    </NuxtLink>
    <div
      class="p-2"
      data-v-inspector="components/productElements/ProductCard.vue:77:5"
    >
      <StarRating />
      <NuxtLink to="/product/dnk-black-shoes" class="" title="DNK Black Shoes">
        <h2 class="mb-2 font-light leading-tight">DNK Black Shoes</h2>
      </NuxtLink>
      <ProductPrice regularPrice="$100" salePrice="$80" />
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
