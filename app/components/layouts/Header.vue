<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const props = defineProps<{
  links: NavigationMenuItem[];
}>();
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :items="props.links"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden',
      }"
    >
      <template #list-trailing>
        <AppColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>
