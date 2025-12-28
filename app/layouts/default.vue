<script setup lang="ts">
</script>

<template>
  <div>
    <UContainer class="sm:border-x border-default pt-10">
      <LHeader :links="navLinks" />
      <slot />
      <LFooter />
    </UContainer>
  </div>
</template>
