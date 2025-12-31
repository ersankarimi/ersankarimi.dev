<script lang="ts" setup>
import type { ExperienceCollectionItem } from "@nuxt/content";

const props = defineProps<{
  item: ExperienceCollectionItem;
}>();

const emit = defineEmits<{
  (e: "onViewDetails"): void;
}>();
</script>

<template>
  <UPageCard
    variant="soft"
    :ui="{
      body: 'w-full',
    }"
  >
    <template #body>
      <div class="flex flex-col gap-3 min-w-0 xs:flex-row">
        <NuxtImg
          v-if="props.item.logo"
          class="h-14 w-14 shrink-0 rounded-lg object-contain"
          placeholder
          :src="props.item.logo"
          :alt="`${props.item.title} Logo`"
        />

        <div class="flex flex-col gap-1 min-w-0 flex-1">
          <h3 class="text-lg font-semibold leading-tight truncate">
            {{ props.item.title }}
          </h3>

          <div class="flex flex-col gap-0.5">
            <h4>
              {{ props.item.role }}
            </h4>
            <p
              class="text-muted"
            >
              {{ props.item.period }}
            </p>
          </div>

          <UButton
            label="View Details"
            size="sm"
            class="w-fit mt-3"
            variant="subtle"
            @click="emit('onViewDetails')"
          />
        </div>
      </div>
    </template>
  </UPageCard>
</template>
