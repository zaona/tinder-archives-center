<template>
  <ClientOnly>
    <div class="fixed right-4 bottom-4 flex flex-col gap-2">
      <button
        class="cursor-pointer bg-gray-950 p-3 text-gray-200 transition-colors hover:text-gray-50"
        @click="toggleColorMode"
      >
        <BaseIcon
          :name="`#icon-theme-${$colorMode.preference}`"
          class="size-[24px]"
        />
      </button>
      <button
        v-if="showBackToTop"
        class="cursor-pointer bg-gray-950 p-3 text-gray-200 transition-colors hover:text-gray-50"
        @click="scrollToTop"
      >
        <BaseIcon name="#icon-up" class="size-[24px]" />
      </button>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useColorMode } from "#imports";

const colorMode = useColorMode();
const showBackToTop = ref(false);

const toggleColorMode = () => {
  const modes = ["system", "light", "dark"];
  const currentIndex = modes.indexOf(colorMode.preference);
  const nextIndex = (currentIndex + 1) % modes.length;
  colorMode.preference = modes[nextIndex];
};

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
