<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const { breadcrumb } = defineProps<{
  breadcrumb: Array<{ name: string; link: string | null }>;
}>();
</script>

<template>
  <div class="flex text-sm leading-none text-gray-400 gap-1 items-center">
    <span>
      <NuxtLink to="/" class="hover:text-primary">
        {{ $t("messages.general.home") }}
      </NuxtLink>
      <span> /</span>
    </span>
    <span v-for="(link, i) in breadcrumb" :key="link.name || i">
      <NuxtLink
        v-if="link.link"
        :to="decodeURIComponent(link.link)"
        class="hover:text-primary"
      >
        {{ link.name }}
      </NuxtLink>
      <span v-else class="text-gray-800"> {{ link.name }} </span>
      <span v-if="i + 1 < breadcrumb.length"> /</span>
    </span>
  </div>
</template>
