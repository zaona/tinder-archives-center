<template>
  <header>
    <div class="bg-black hidden lg:block">
      <div class="h-20 px-4 flex items-center justify-between">
        <NuxtLink class="flex h-full items-center" to="/">
          <img class="h-8" src="~/assets/tac-logo/symbol-type-white.svg">
        </NuxtLink>
        <div class="flex h-full items-center justify-between w-1/2 mr-4">
          <NuxtLink class="font-medium text-white" to="/color">颜色</NuxtLink>
          <NuxtLink class="font-medium text-white" to="/font">字体</NuxtLink>
          <NuxtLink class="font-medium text-white" to="/logo">标志</NuxtLink>
          <NuxtLink class="font-medium text-white" to="/tool">工具</NuxtLink>
          <NuxtLink class="font-medium text-white" to="/about">关于</NuxtLink>
          <NuxtLink class="font-medium text-white" to="https://github.com/zaona/tinder-archives-center/discussions"
            target="_blank">交流</NuxtLink>
        </div>
      </div>
    </div>

    <div class="bg-black block lg:hidden">
      <div class="h-20 px-4 flex items-center justify-between">
        <img @click="toggleMenu" class="h-[40px] cursor-pointer" src="~/assets/icon/menu-white.svg">
        <NuxtLink class="ml-8 mr-1 h-8" to="/">
          <img class="h-full" src="~/assets/tac-logo/symbol-type-white.svg">
        </NuxtLink>
      </div>
    </div>
    <div id="overlay" class="fixed inset-0 z-10 bg-black opacity-30 transition-opacity" :class="{ hidden: !isOpen }"
      @click="toggleMenu"></div>
    <div id="sideMenu" class="z-20 fixed inset-y-0 left-0 w-80 bg-black transition ease-in-out"
      :style="{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }">
      <div class="pt-14 w-full flex flex-col gap-2">
        <NuxtLink @click="toggleMenu" class="py-2 px-8 text-white" to="/">首页</NuxtLink>
        <NuxtLink @click="toggleMenu" class="py-2 px-8 text-white" to="/color">颜色</NuxtLink>
        <NuxtLink @click="toggleMenu" class="py-2 px-8 text-white" to="/font">字体</NuxtLink>
        <NuxtLink @click="toggleMenu" class="py-2 px-8 text-white" to="/logo">标志</NuxtLink>
        <NuxtLink @click="toggleMenu" class="py-2 px-8 text-white" to="/tool">工具</NuxtLink>
        <NuxtLink @click="toggleMenu" class="py-2 px-8 text-white" to="/about">关于</NuxtLink>
        <NuxtLink @click="toggleMenu" class="py-2 px-8 text-white" to="https://github.com/zaona/tinder-archives-center/discussions"
        target="_blank">交流</NuxtLink>
      </div>
    </div>

  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
// 阻止页面滚动
const preventBodyScroll = () => {
  document.body.style.overflow = isOpen.value ? 'hidden' : 'auto';
};

onMounted(() => {
  window.addEventListener('resize', preventBodyScroll);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleMenu();
    }
  });
});

// 清理事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', preventBodyScroll);
  window.removeEventListener('keydown', () => { });
});
</script>

<style scoped></style>