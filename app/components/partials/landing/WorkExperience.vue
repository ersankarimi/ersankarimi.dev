<script setup lang="ts">
import type { IndexCollectionItem } from "@nuxt/content";

const props = defineProps<{
  page: IndexCollectionItem;
}>();

const colorMode = useColorMode();
</script>

<template>
  <UPageSection
    :title="props.page.experience.title"
    :ui="{
      container: 'p-0! gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2',
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in props.page.experience.items"
          :key="index"
          class="text-muted flex items-center text-nowrap gap-2"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.6 + 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <UButton
            class="flex items-center w-full gap-4"
            color="neutral"
            variant="ghost"
            size="lg"
            :href="`/experience/${experience.company.slug}`"
          >
            <p class="text-sm">
              {{ experience.date }}
            </p>

            <USeparator />

            <div class="flex items-center gap-1">
              <div
                class="flex items-center gap-1"
              >
                <span class="text-sm">
                  {{ experience.position }}
                </span>
                <span>at</span>

                <div
                  class="inline-flex items-center gap-0.5"
                  :style="{ color: colorMode.value === 'dark' ? experience.company['color-dark'] : experience.company['color-light'] }"
                >
                  <span class="font-medium">{{ experience.company.name }}</span>
                </div>
              </div>

              <UIcon
                name="i-lucide-arrow-up-right"
                class="w-4 h-4"
              />
            </div>
          </UButton>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
