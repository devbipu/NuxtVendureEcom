<script setup lang="ts">
interface ProductPriceProps {
  regularPrice?: string | number | null;
  salePrice?: string | number | null;
  currencyCode: string | null;
}

const { regularPrice, salePrice } = defineProps<ProductPriceProps>();
</script>

<template>
  <div v-if="regularPrice" class="flex font-semibold">
    <span :class="{ 'text-gray-400 line-through font-normal': salePrice }">
      {{ regularPrice }} {{ currencyCode }}
    </span>
    <span v-if="salePrice" class="ml-2">
      {{ salePrice }} {{ currencyCode }}
    </span>
  </div>
</template>
