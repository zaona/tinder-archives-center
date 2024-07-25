<template>
  <div>
    <Header class="fixed top-0 w-full z-10" />
    <div class="mt-20">
      <slot />
      <BackTop />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
