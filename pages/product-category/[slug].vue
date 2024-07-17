<script setup>
const route = useRoute();
</script>
<template>
  <div class="container flex items-start gap-16">
    <h3>{{ route.params.slug }}</h3>
  </div>
</template>
