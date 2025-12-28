<script setup lang="ts">
import { MOTION_OPTIONS } from "~/constants";

const { data: page } = await useAsyncData("index", () => {
  return queryCollection("index").first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description,
});
</script>

<template>
  <UPage v-if="page">
    <PLandingHero :page="page" />

    <UPageSection
      :ui="{
        container: 'pt-0! flex flex-col gap-16',
      }"
    >
      <Motion
        v-bind="MOTION_OPTIONS"
        :transition="{
          duration: 0.6,
          delay: 0.1,
        }"
      >
        <PLandingAbout :page="page" />
      </Motion>

      <Motion
        v-bind="MOTION_OPTIONS"
        :transition="{
          duration: 0.6,
          delay: 0.25,
        }"
      >
        <PLandingWorkExperience :page="page" />
      </Motion>
    </UPageSection>

    <Motion
      v-bind="MOTION_OPTIONS"
      :transition="{
        duration: 0.6,
        delay: 0.4,
      }"
    >
      <PLandingFAQ :page="page" />
    </Motion>
  </UPage>
</template>
