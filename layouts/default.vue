<template>
  <div class="bg-[var(--color-gray-50)]">
    <Header class="fixed top-0 z-10 w-full" />
    <div class="pt-16 lg:pt-20">
      <slot />
      <FloatingButton />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate(title) {
    return title ? `火种档案 | ${title}` : "火种档案";
  },
});
</script>

<style></style>
