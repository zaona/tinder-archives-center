<template>
  <footer>
    <div class="h-[250px] bg-gray-50">
      <div
        class="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4"
      >
        <div class="hidden w-[166px] flex-col lg:flex">
          <img
            class="mb-2 w-[160px]"
            src="~/assets/tac-logo/symbol-type-black.svg"
          />
          <!-- <img class="mb-2 w-[60px]" src="~/assets/tac-logo/symbol-mix.svg" />
          <img class="w-[120px]" src="~/assets/tac-logo/type-mix.svg" /> -->
        </div>
        <div class="grid w-full grid-cols-2 gap-x-[100px] lg:w-[350px]">
          <div class="flex flex-col">
            <p class="mb-2 text-[14px] font-bold">开源代码</p>
            <a
              target="_blank"
              class="text-[14px] text-gray-500"
              href="https://github.com/zaona/tinder-archives-center"
              >Github</a
            >
          </div>
          <div class="flex flex-col">
            <p class="mb-2 text-[14px] font-bold">特别鸣谢</p>
            <a
              target="_blank"
              class="mb-1 text-[14px] text-gray-500"
              href="https://tongyi.aliyun.com/lingma"
              >通义灵码</a
            >
            <a
              target="_blank"
              class="text-[14px] text-gray-500"
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
        <p class="text-[14px] text-gray-500">
          Copyright © 2024 火种档案。保留所有权利。
        </p>
        <img
          class="hidden h-full lg:block"
          src="~/assets/img/illus/earth-engine.svg"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>
