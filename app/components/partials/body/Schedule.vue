<script setup lang="ts">
import type { BodyCollectionItem } from "@nuxt/content";

defineProps<{
  days: BodyCollectionItem["schedule"];
  selectedDay: string | null;
}>();

const emit = defineEmits<{
  select: [day: BodyCollectionItem["schedule"][number]];
}>();
</script>

<template>
  <section id="jadwal" class="scroll-mt-24" aria-labelledby="schedule-title">
    <div class="mb-4">
      <h2 id="schedule-title" class="text-xl font-semibold text-highlighted">Jadwal mingguan</h2>
      <p class="mt-1 text-sm text-muted print:hidden">Pilih hari latihan untuk membuka sesinya.</p>
    </div>
    <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      <button
        v-for="day in days"
        :key="day.id"
        type="button"
        class="body-print-card min-w-0 rounded-lg border p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        :class="selectedDay === day.id ? 'border-primary bg-primary/5' : 'border-default bg-elevated/40 hover:bg-muted/50'"
        :aria-pressed="selectedDay === day.id"
        @click="emit('select', day)"
      >
        <div class="flex items-center justify-between gap-3">
          <span class="text-sm font-medium text-primary">{{ day.day }}</span>
          <UIcon v-if="day.sessionId" name="i-lucide-arrow-up-right" class="size-4 shrink-0 text-muted print:hidden" />
        </div>
        <span class="mt-2 block font-semibold text-highlighted">{{ day.activity }}</span>
        <p class="mt-1 text-sm leading-relaxed text-toned">{{ day.description }}</p>
        <p class="mt-3 text-xs text-muted">{{ day.duration }}</p>
      </button>
    </div>
  </section>
</template>
