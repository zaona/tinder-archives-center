<template>
  <footer>
    <div class="h-[250px] bg-gray-100">
      <div
        class="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4"
      >
        <img
          class="mb-2 hidden w-[160px] lg:block dark:invert"
          src="~/assets/tac-logo/symbol-type-black.svg"
          alt="Logo"
        />

        <div class="grid w-full grid-cols-2 gap-x-[100px] lg:w-[350px]">
          <div class="flex flex-col gap-2">
            <p class="mb-1 text-sm font-bold text-gray-950">了解更多</p>
            <NuxtLink
              class="text-sm text-gray-500 hover:text-gray-600"
              to="/vi"
            >
              VI 指南
            </NuxtLink>
            <NuxtLink
              target="_blank"
              class="text-sm text-gray-500 hover:text-gray-600"
              to="https://www.yuque.com/zaona/tac/changelog"
            >
              更新日志
            </NuxtLink>
            <NuxtLink
              target="_blank"
              class="text-sm text-gray-500 hover:text-gray-600"
              to="https://github.com/zaona/tinder-archives-center"
            >
              Github 仓库
            </NuxtLink>
          </div>
          <div class="flex flex-col gap-2">
            <p class="mb-1 text-sm font-bold text-gray-950">特别鸣谢</p>
            <a
              target="_blank"
              class="text-sm text-gray-500 hover:text-gray-600"
              href="https://tongyi.aliyun.com/lingma"
              >通义灵码</a
            >
            <a
              target="_blank"
              class="text-sm text-gray-500 hover:text-gray-600"
              href="https://www.trae.com.cn/"
              >Trae</a
            >
            <a
              target="_blank"
              class="text-sm text-gray-500 hover:text-gray-600"
              href="https://weibo.com/6436669966"
              >电影流浪地球</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="h-[78px] bg-gray-200">
      <div
        class="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4"
      >
        <p class="text-sm text-gray-950/50">
          © 2024-2025 Zaona. All Rights Reserved.
        </p>
        <BaseIcon
          name="#icon-illus-earth-engine"
          class="hidden aspect-[104/39] h-full text-gray-950 lg:block"
        />
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style></style>
