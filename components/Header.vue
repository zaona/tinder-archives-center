<template>
  <header :style="{ backgroundColor: headerBgColor, transition: 'background-color 0.3s ease' }">
    <div class="hidden border-b border-white/40 lg:block backdrop-filter backdrop-blur-sm">
      <div class="flex h-20 items-center justify-between px-4">
        <NuxtLink class="flex h-full items-center" to="/">
          <img
            class="h-8"
            src="~/assets/tac-logo/symbol-type-white.svg"
            alt="Logo"
          />
        </NuxtLink>
        <div class="mr-4 flex h-full w-1/2 items-center justify-between">
          <NuxtLink
            v-for="link in links"
            :to="link.to"
            :target="link.target"
            class="font-medium text-[#fff]"
            >{{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="block border-b border-white/40 lg:hidden backdrop-filter backdrop-blur-sm">
      <div class="flex h-16 items-center justify-between px-4">
        <BaseIcon
          name="#icon-menu"
          class="size-6 cursor-pointer text-[#fff]"
          @click="toggleMenu"
        />
        <NuxtLink class="mr-1 ml-4 h-6" to="/">
          <img
            class="h-full"
            src="~/assets/tac-logo/symbol-type-white.svg"
            alt="Logo"
          />
        </NuxtLink>
      </div>
    </div>
    <div
      id="overlay"
      class="fixed inset-0 z-10 bg-[#000] opacity-30 transition-opacity"
      :class="{ hidden: !isOpen }"
      @click="toggleMenu"
    ></div>
    <div
      id="sideMenu"
      class="fixed inset-y-0 left-0 z-20 w-80 bg-[#000] transition ease-in-out"
      :class="{ '-translate-x-80': !isOpen }"
    >
      <div class="flex w-full flex-col gap-2 pt-14">
        <NuxtLink
          @click="toggleMenu"
          v-for="link in links"
          :to="link.to"
          :target="link.target"
          class="px-8 py-2 font-medium text-[#fff]"
          >{{ link.text }}</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const headerBgColor = ref("#000"); // 初始背景颜色为纯黑

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const links = [
  { to: "/", text: "首页" },
  { to: "/color", text: "颜色" },
  { to: "/font", text: "字体" },
  { to: "/logo", text: "标志" },
  { to: "/more", text: "更多" },
  { to: "/about", text: "关于" },
];

// 监听滚动事件
const handleScroll = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  headerBgColor.value = scrollY > 0 ? "rgba(0, 0, 0, 0.6)" : "#000"; // 滑动后变为透明黑
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style></style>