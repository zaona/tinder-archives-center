<template>
  <NuxtLoadingIndicator color="var(--primary-color)" :throttle="0" />
  <!-- :throttle="0" -->
  <main class="bg-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
