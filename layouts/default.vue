<template>
  <div>
    <Header class="fixed top-0 z-10 w-full" />
    <div class="lg:mt-20 mt-16">
      <slot />
      <BackTop />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
