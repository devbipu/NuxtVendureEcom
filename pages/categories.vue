<script setup lang="ts">
import type { Collection } from "@/types";
const { data } = await useAsyncGql("getCollections");
const productCategories = data?.value?.collections?.items as Collection[];
useHead({
  title: `Categories`,
  meta: [{ name: "description", content: "All product categories" }],
  link: [
    { rel: "canonical", href: "https://nuxt-vendure.netlify.app/categories" },
  ],
});
</script>
<template>
  <main class="container">
    <div
      v-if="productCategories && productCategories.length"
      class="grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4"
    >
      <CategoryCard
        v-for="(category, i) in productCategories"
        :key="i"
        :node="category"
        :image-loading="i <= 2 ? 'eager' : 'lazy'"
      />
    </div>
  </main>
</template>
