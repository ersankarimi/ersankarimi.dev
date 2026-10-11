<script setup lang="ts">
import type { BodyCollectionItem } from "@nuxt/content";

const props = defineProps<{
  guides: BodyCollectionItem["guides"];
  equipment: BodyCollectionItem["equipment"];
}>();

const items = computed(() => props.guides.map(guide => ({ label: guide.title, value: guide.id, guide })));
</script>

<template>
  <section id="panduan" class="scroll-mt-24" aria-labelledby="guides-title">
    <h2 id="guides-title" class="text-xl font-semibold text-highlighted">Panduan latihan</h2>
    <div class="mt-4 rounded-lg border border-default p-4">
      <h3 class="font-medium text-highlighted">Peralatan</h3>
      <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-toned">
        <li v-for="item in equipment" :key="item">{{ item }}</li>
      </ul>
    </div>
    <UAccordion class="mt-3 print:hidden" :items="items" type="multiple">
      <template #body="{ item }">
        <div class="space-y-3 text-sm leading-relaxed text-toned">
          <p v-for="paragraph in item.guide.paragraphs" :key="paragraph">{{ paragraph }}</p>
          <ol v-if="item.guide.steps.length" class="list-decimal space-y-2 pl-5">
            <li v-for="step in item.guide.steps" :key="step">{{ step }}</li>
          </ol>
        </div>
      </template>
    </UAccordion>
    <div class="hidden space-y-5 print:block">
      <section v-for="guide in guides" :key="guide.id" class="mt-4">
        <h3 class="font-semibold">{{ guide.title }}</h3>
        <p v-for="paragraph in guide.paragraphs" :key="paragraph" class="mt-2 text-sm">{{ paragraph }}</p>
        <ol v-if="guide.steps.length" class="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li v-for="step in guide.steps" :key="step">{{ step }}</li>
        </ol>
      </section>
    </div>
  </section>
</template>
