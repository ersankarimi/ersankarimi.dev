<script setup lang="ts">
import { MOTION_OPTIONS } from "~/constants";

const { data: page } = await useAsyncData("about", () => {
  return queryCollection("about").first();
});
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description,
});
</script>

<template>
  <UPage v-if="page">
    <Motion
      v-bind="MOTION_OPTIONS"
    >
      <UPageHero
        :title="page.title"
        :description="page.description"
        orientation="horizontal"
        :ui="{
          container: 'lg:flex sm:flex-row items-center',
          title: 'mx-0! text-left',
          description: 'mx-0! text-left',
          links: 'justify-start',
        }"
      >
        <NuxtImg
          class="size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-bg object-cover"
          src="/profile.webp"
          alt="Profile Picture"
          placeholder
          deconding="async"
          :preload="{
            fetchPriority: 'high',
          }"
        />
      </UPageHero>
    </Motion>

    <Motion
      v-bind="MOTION_OPTIONS"
      :initial="{
        ...MOTION_OPTIONS.initial,
        scale: 1,
      }"
      :transition="{
        duration: 0.6,
        delay: 0.3,
      }"
    >
      <UPageSection
        :ui="{
          container: 'pt-0!',
        }"
      >
        <MDC
          unwrap="p"
          :value="page.content"
        />
      </UPageSection>
    </Motion>
  </UPage>
</template>
