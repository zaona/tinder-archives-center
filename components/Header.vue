<template>
  <header>
    <div
      class="hidden bg-linear-65 from-[var(--primary-color)] to-[#000] lg:block"
    >
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
            >{{ link.text }}</NuxtLink
          >
        </div>
      </div>
    </div>

    <div
      class="block bg-linear-65 from-[var(--primary-color)] to-[#000] lg:hidden"
    >
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
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const links = [
  { to: "/", text: "首页" },
  { to: "/color", text: "颜色" },
  { to: "/font", text: "字体" },
  { to: "/logo", text: "标志" },
  { to: "/tool", text: "工具" },
  { to: "/about", text: "关于" },
  {
    to: "https://github.com/zaona/tinder-archives-center/discussions",
    text: "交流",
    target: "_blank",
  },
];
</script>

<style></style>
