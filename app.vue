<template>
  <!-- <NuxtLoadingIndicator color="#fff" :throttle="0" /> -->
  <!-- :throttle="0" -->
  <main class="bg-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
<script>
useHead({
  titleTemplate(title) {
    return title ? `火种档案 | ${title}` : "火种档案";
  },
});
</script>
