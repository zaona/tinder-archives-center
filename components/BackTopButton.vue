<template>
  <div>
    <button
      v-if="showBackToTop"
      class="fixed right-4 bottom-4 cursor-pointer border border-gray-200 bg-gray-950 p-3 transition-shadow hover:shadow-lg"
      @click="scrollToTop"
    >
    <BaseIcon name="#icon-up" class="size-[20px] text-gray-50" />
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
