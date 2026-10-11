<script setup lang="ts">
import type { BodyCollectionItem } from "@nuxt/content";

defineProps<{
  progression: BodyCollectionItem["progression"];
}>();
</script>

<template>
  <section id="progresi" class="scroll-mt-24" aria-labelledby="progression-title">
    <h2 id="progression-title" class="text-xl font-semibold text-highlighted">{{ progression.title }}</h2>
    <div class="mt-4 space-y-3">
      <article v-for="phase in progression.phases" :key="phase.id" class="rounded-lg border border-default p-4 sm:p-5">
        <p class="text-xs font-medium text-primary">{{ phase.label }}</p>
        <h3 class="mt-1 font-semibold text-highlighted">{{ phase.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-toned">{{ phase.description }}</p>
      </article>
    </div>
    <p v-for="note in progression.notes" :key="note" class="mt-3 text-sm leading-relaxed text-toned">{{ note }}</p>
  </section>
</template>
