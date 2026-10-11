<script setup lang="ts">
import type { BodyCollectionItem } from "@nuxt/content";

defineProps<{
  program: BodyCollectionItem;
}>();

function printProgram() {
  window.print();
}
</script>

<template>
  <header class="pt-5 pb-8 sm:pt-8 sm:pb-10">
    <div class="mb-8 flex items-center justify-between gap-2 print:hidden">
      <UButton to="/about" icon="i-lucide-arrow-left" color="neutral" variant="ghost" label="About" class="min-h-11" />
      <div class="flex items-center gap-1">
        <div class="[&_button]:min-h-11 [&_button]:min-w-11">
          <AppColorModeButton />
        </div>
        <UButton icon="i-lucide-printer" color="neutral" variant="soft" label="Cetak" class="min-h-11" @click="printProgram" />
      </div>
    </div>
    <p class="mb-3 text-sm font-medium text-primary">Ersan Body Project</p>
    <h1 class="max-w-2xl text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      {{ program.title }}
    </h1>
    <p class="mt-4 max-w-2xl text-base leading-relaxed text-toned">{{ program.description }}</p>
    <ul class="mt-5 flex flex-wrap gap-2" aria-label="Ringkasan program">
      <li v-for="item in program.summary" :key="item">
        <UBadge color="neutral" variant="soft" class="whitespace-normal">{{ item }}</UBadge>
      </li>
    </ul>
  </header>
</template>
