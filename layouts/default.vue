<template>
  <div class="bg-[var(--color-gray-50)]">
    <Header class="fixed top-0 z-10 w-full" />
    <div class="pt-16 lg:t-20">
      <slot />
      <FloatingButton />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
