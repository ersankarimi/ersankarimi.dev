<script setup lang="ts">
import type { BodyCollectionItem } from "@nuxt/content";

defineProps<{
  exercise: BodyCollectionItem["sessions"][number]["exercises"][number];
  number: number;
}>();
</script>

<template>
  <article class="rounded-lg border border-default p-4 sm:p-5">
    <div class="flex items-start gap-3">
      <span class="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-semibold text-primary" aria-hidden="true">
        {{ number }}
      </span>
      <div class="min-w-0 flex-1">
        <h4 class="font-semibold text-highlighted">
          <a :href="exercise.url" target="_blank" rel="noopener noreferrer" class="rounded-sm underline decoration-default underline-offset-4 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">
            {{ exercise.name }}
            <UIcon name="i-lucide-arrow-up-right" class="inline size-3.5 text-muted print:hidden" />
            <span class="sr-only"> — panduan Fitbod, buka tab baru</span>
          </a>
        </h4>
        <p class="mt-2 font-medium text-primary">{{ exercise.dose }}</p>
        <p class="mt-1 text-sm text-muted">{{ exercise.equipment }}</p>
        <ul v-if="exercise.notes.length" class="mt-3 space-y-1 text-sm leading-relaxed text-toned">
          <li v-for="note in exercise.notes" :key="note">{{ note }}</li>
        </ul>
        <div v-if="exercise.alternative" class="mt-4 rounded-md bg-elevated p-3 text-sm leading-relaxed">
          <p class="font-medium text-highlighted">Alternatif</p>
          <p class="mt-1 text-toned">{{ exercise.alternative.when }}</p>
          <a :href="exercise.alternative.url" target="_blank" rel="noopener noreferrer" class="mt-2 inline-block font-medium text-primary underline underline-offset-4">
            {{ exercise.alternative.name }}<span class="sr-only"> — buka tab baru</span>
          </a>
          <p>{{ exercise.alternative.dose }} · {{ exercise.alternative.equipment }}</p>
        </div>
      </div>
    </div>
  </article>
</template>
