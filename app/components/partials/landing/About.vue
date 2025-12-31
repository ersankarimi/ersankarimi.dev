<script setup lang="ts">
import type { IndexCollectionItem } from "@nuxt/content";

const props = defineProps<{
  page: IndexCollectionItem;
}>();
</script>

<template>
  <UPageSection
    :title="props.page.about.title"
    :links="props.page.about.links"
    :ui="{
      container: 'p-0!',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-semibold',
      description: 'text-muted text-left text-pretty mt-3 text-sm sm:text-base',
      links: 'justify-start',
      footer: 'mt-4',
    }"
  >
    <template #description>
      <p>
        {{ props.page.about.description }}
      </p>
    </template>
  </UPageSection>
</template>
