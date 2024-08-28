<template>
  <footer>
    <div class="h-[250px] bg-gray-50">
      <div
        class="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4"
      >
        <img
          class="mb-2 hidden w-[160px] lg:block"
          src="~/assets/tac-logo/symbol-type-black.svg"
          alt="Logo"
        />
        <div class="grid w-full grid-cols-2 gap-x-[100px] lg:w-[350px]">
          <div class="flex flex-col gap-2">
            <p class="mb-1 text-sm font-bold">了解更多</p>
            <a class="text-sm text-gray-500 hover:text-gray-600" href="/doc"
              >更新日志</a
            >
            <a class="text-sm text-gray-500 hover:text-gray-600" href="/vi"
              >VI 指南</a
            >
            <a
              target="_blank"
              class="text-sm text-gray-500 hover:text-gray-600"
              href="https://github.com/zaona/tinder-archives-center"
              >Github 仓库</a
            >
          </div>
          <div class="flex flex-col gap-2">
            <p class="mb-1 text-sm font-bold">特别鸣谢</p>
            <a
              target="_blank"
              class="text-sm text-gray-500 hover:text-gray-600"
              href="https://tongyi.aliyun.com/lingma"
              >通义灵码</a
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
    <div class="h-[78px] bg-gray-100">
      <div
        class="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4"
      >
        <p class="text-sm text-gray-500">
          Copyright © 2024 火种档案。保留所有权利。
        </p>
        <img
          class="hidden h-full lg:block"
          src="~/assets/img/illus/earth-engine.svg"
          alt="行星发动机"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>
