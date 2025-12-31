<script setup lang="ts">
import type { IndexCollectionItem } from "@nuxt/content";
import type { AccordionItem } from "@nuxt/ui";

interface ExperienceAccordionItem extends AccordionItem {
  experience: IndexCollectionItem["experience"]["items"][0];
}

const props = defineProps<{
  page: IndexCollectionItem;
}>();

const accordionItems = computed<ExperienceAccordionItem[]>(() => {
  return props.page.experience.items.map((experience) => {
    return {
      label: "",
      experience,
    };
  });
});
</script>

<template>
  <UPageSection
    :title="props.page.experience.title"
    :ui="{
      container: 'p-0! gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-semibold',
      description: 'mt-2',
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2 mt-2">
        <UAccordion
          :items="accordionItems"
          :ui="{
            item: 'border-none',
            trigger: 'mb-2 border-0 group px-4 transform-gpu rounded-lg bg-elevated/60 will-change-transform hover:bg-muted/50 text-base',
          }"
        >
          <template #default="{ item, index }">
            <Motion
              :key="index"
              class="text-muted flex items-center text-nowrap gap-2"
              :initial="{ opacity: 0, transform: 'translateY(20px)' }"
              :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
              :transition="{ delay: 0.6 + 0.2 * index }"
              :in-view-options="{ once: true }"
            >
              <div class="flex gap-3">
                <NuxtImg
                  :src="item.experience.company.logo"
                  :alt="item.experience.company.name"
                  class="size-8 rounded-md object-contain sm:size-10"
                  placeholder
                  decoding="async"
                />

                <div class="flex min-w-0 flex-col gap-0.5 text-default">
                  <p class="text-xs md:text-sm text-toned truncate">
                    {{ item.experience.company.name }}
                  </p>

                  <h5 class="font-semibold text-sm md:text-base leading-snug truncate">
                    {{ item.experience.headline }}
                  </h5>

                  <p class="text-toned text-xs md:text-sm leading-snug truncate">
                    {{ item.experience.subheadline }}
                  </p>
                </div>
              </div>
            </Motion>
          </template>

          <template #content="{ item }">
            <div class="mt-4 space-y-4 text-left text-toned text-sm border border-muted p-4 mb-6">
              <p
                v-if="item.experience.summary"
                class="text-default leading-relaxed whitespace-pre-line"
              >
                {{ item.experience.summary }}
              </p>

              <div v-if="item.experience.roles?.length" class="space-y-4">
                <div
                  v-for="(role, i) in item.experience.roles"
                  :key="`${item.experience.slug}-${i}`"
                  class="rounded-lg border border-default/10 p-3 md:p-4"
                >
                  <div class="flex flex-col gap-1">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <h6 class="font-semibold">
                        {{ role.title }}
                      </h6>
                      <p class="text-toned text-xs">
                        {{ role.period }}
                      </p>
                    </div>

                    <p v-if="role.meta" class="text-toned text-xs">
                      {{ role.meta }}
                    </p>
                  </div>

                  <p
                    v-if="role.description"
                    class="mt-2 leading-relaxed whitespace-pre-line"
                  >
                    {{ role.description }}
                  </p>

                  <ul
                    v-if="role.highlights?.length"
                    class="mt-3 list-disc pl-5 space-y-1"
                  >
                    <li v-for="(h, j) in role.highlights" :key="j">
                      {{ h }}
                    </li>
                  </ul>

                  <div v-if="role.links?.length" class="mt-3 flex flex-wrap gap-2">
                    <NuxtLink
                      v-for="(l, k) in role.links"
                      :key="k"
                      :to="l.url"
                      target="_blank"
                      class="text-sm underline underline-offset-4 hover:opacity-80"
                    >
                      {{ l.label }}
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <div v-if="item.experience.company?.url" class="pt-1">
                <NuxtLink
                  :to="item.experience.company.url"
                  target="_blank"
                  class="text-sm underline underline-offset-4 hover:opacity-80"
                >
                  Visit
                  <span>
                    {{ item.experience.company.name }}
                  </span>
                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="w-4 h-4 inline-block ml-1"
                  />
                </NuxtLink>
              </div>
            </div>
          </template>
        </UAccordion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
