<script setup lang="ts">
interface ProductPriceProps {
  minPrice?: string | number | null;
  maxPrice?: string | number | null;
  currencyCode: string | null;
}

const { minPrice, maxPrice } = defineProps<ProductPriceProps>();
</script>

<template>
  <div v-if="minPrice" class="flex font-semibold">
    <span>
      {{ minPrice }} {{ currencyCode }}
      <span> - </span>
    </span>

    <span v-if="maxPrice" class="ml-2">
      {{ maxPrice }} {{ currencyCode }}
    </span>
  </div>
</template>
