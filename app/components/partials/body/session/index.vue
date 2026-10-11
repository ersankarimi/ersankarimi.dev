<script setup lang="ts">
import type { BodyCollectionItem } from "@nuxt/content";

defineProps<{
  session: BodyCollectionItem["sessions"][number];
  core?: BodyCollectionItem["core"][number];
}>();
</script>

<template>
  <div class="space-y-5">
    <div>
      <div class="flex flex-wrap items-center gap-2">
        <h3 class="text-lg font-semibold text-highlighted">{{ session.title }}</h3>
        <UBadge color="neutral" variant="subtle">{{ session.duration }}</UBadge>
      </div>
      <p class="mt-2 text-sm text-toned">{{ session.focus }}</p>
    </div>
    <div class="grid gap-3 sm:grid-cols-2">
      <PBodySessionExercise
        v-for="(exercise, index) in session.exercises"
        :key="`${session.id}-${index}`"
        :exercise="exercise"
        :number="index + 1"
      />
    </div>
    <p v-for="note in session.notes" :key="note" class="text-sm leading-relaxed text-toned">{{ note }}</p>
    <section v-if="core" class="space-y-3 rounded-lg bg-elevated/50 p-4 sm:p-5" :aria-label="core.title">
      <div class="flex flex-wrap items-center gap-2">
        <h3 class="font-semibold text-highlighted">{{ core.title }}</h3>
        <UBadge v-if="session.coreOptional" color="neutral" variant="soft">Opsional</UBadge>
      </div>
      <p class="text-sm leading-relaxed text-toned">{{ core.description }}</p>
      <div class="grid gap-3 sm:grid-cols-2">
        <PBodySessionExercise
          v-for="(exercise, index) in core.exercises"
          :key="`${core.id}-${index}`"
          :exercise="exercise"
          :number="index + 1"
        />
      </div>
    </section>
  </div>
</template>
