<script setup lang="ts">
const colorMode = useColorMode();

const color = computed(() => colorMode.value === "dark" ? "#020618" : "white");

useHead({
  meta: [
    { key: "theme-color", name: "theme-color", content: color },
  ],
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>
  </UApp>
</template>
