<template>
  <div class="body-layout min-h-screen bg-default text-default">
    <UContainer class="sm:border-x border-default">
      <slot />
    </UContainer>
  </div>
</template>

<style>
@media print {
  html:has(.body-layout),
  html:has(.body-layout) body,
  .body-layout {
    background: white !important;
    color: #111 !important;
    color-scheme: light;
  }

  .body-layout * {
    color: #111 !important;
    background: transparent !important;
    box-shadow: none !important;
    text-shadow: none !important;
    border-color: #ccc !important;
    overflow: visible !important;
  }

  .body-layout > div {
    max-width: none;
    padding: 0;
    border: 0;
  }

  .body-layout h2,
  .body-layout h3,
  .body-layout h4 {
    break-after: avoid;
  }

  .body-layout article,
  .body-layout .body-print-card {
    break-inside: avoid;
  }

  .body-layout a {
    text-decoration: underline;
  }
}
</style>
