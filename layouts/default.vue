<template>
  <div>
    <Header class="fixed top-0 z-10 w-full" />
    <div class="mt-16 lg:mt-20">
      <slot />
      <BackTopButton />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
