<template>
  <header>
    <div class="hidden bg-black lg:block">
      <div class="flex h-20 items-center justify-between px-4">
        <NuxtLink class="flex h-full items-center" to="/">
          <img class="h-8" src="~/assets/tac-logo/symbol-type-white.svg" />
        </NuxtLink>
        <div class="mr-4 flex h-full w-1/2 items-center justify-between">
          <NuxtLink class="font-medium text-white" to="/color">颜色</NuxtLink>
          <NuxtLink class="font-medium text-white" to="/font">字体</NuxtLink>
          <NuxtLink class="font-medium text-white" to="/logo">标志</NuxtLink>
          <NuxtLink class="font-medium text-white" to="/tool">工具</NuxtLink>
          <NuxtLink class="font-medium text-white" to="/about">关于</NuxtLink>
          <NuxtLink
            class="font-medium text-white"
            to="https://github.com/zaona/tinder-archives-center/discussions"
            target="_blank"
            >交流</NuxtLink
          >
        </div>
      </div>
    </div>

    <div class="block bg-black lg:hidden">
      <div class="flex h-20 items-center justify-between px-4">
        <img
          @click="toggleMenu"
          class="h-[40px] cursor-pointer"
          src="~/assets/icon/menu-white.svg"
        />
        <NuxtLink class="ml-8 mr-1 h-8" to="/">
          <img class="h-full" src="~/assets/tac-logo/symbol-type-white.svg" />
        </NuxtLink>
      </div>
    </div>
    <div
      id="overlay"
      class="fixed inset-0 z-10 bg-black opacity-30 transition-opacity"
      :class="{ hidden: !isOpen }"
      @click="toggleMenu"
    ></div>
    <div
      id="sideMenu"
      class="fixed inset-y-0 left-0 z-20 w-80 bg-black transition ease-in-out"
      :style="{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }"
    >
      <div class="flex w-full flex-col gap-2 pt-14">
        <NuxtLink @click="toggleMenu" class="px-8 py-2 text-white" to="/"
          >首页</NuxtLink
        >
        <NuxtLink @click="toggleMenu" class="px-8 py-2 text-white" to="/color"
          >颜色</NuxtLink
        >
        <NuxtLink @click="toggleMenu" class="px-8 py-2 text-white" to="/font"
          >字体</NuxtLink
        >
        <NuxtLink @click="toggleMenu" class="px-8 py-2 text-white" to="/logo"
          >标志</NuxtLink
        >
        <NuxtLink @click="toggleMenu" class="px-8 py-2 text-white" to="/tool"
          >工具</NuxtLink
        >
        <NuxtLink @click="toggleMenu" class="px-8 py-2 text-white" to="/about"
          >关于</NuxtLink
        >
        <NuxtLink
          @click="toggleMenu"
          class="px-8 py-2 text-white"
          to="https://github.com/zaona/tinder-archives-center/discussions"
          target="_blank"
          >交流</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style></style>
