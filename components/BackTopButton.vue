<template>
  <div>
    <button
      v-if="showBackToTop"
      class="fixed right-4 bottom-4 cursor-pointer border border-solid border-gray-200 bg-gray-950 p-3 transition-shadow hover:shadow-lg"
      @click="scrollToTop"
    >
      <img src="~/assets/icon/up.svg" alt="Back to top" class="dark:invert" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const showBackToTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const checkScrollPosition = () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  showBackToTop.value = scrollTop > 0;
};

onMounted(() => {
  window.addEventListener("scroll", checkScrollPosition);
  checkScrollPosition();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScrollPosition);
});
</script>
