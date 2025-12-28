<script setup lang="ts">
const colorMode = useColorMode();

const color = computed(() => colorMode.value === "dark" ? "#020618" : "white");

useHead({
  meta: [
    { key: "theme-color", name: "theme-color", content: color },
  ],
});

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData("navigation", () => {
    return Promise.all([
      queryCollectionNavigation("blog"),
    ]);
  }, {
    transform: data => data.flat(),
  }),
  useLazyAsyncData("search", () => {
    return Promise.all([
      queryCollectionSearchSections("blog"),
    ]);
  }, {
    server: false,
    transform: data => data.flat(),
  }),
]);
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        shortcut="meta_k"
        :links="navLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
