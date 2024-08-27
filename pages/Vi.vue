<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-about.png" bannerTitle="VI 指南" />

    <div class="mx-auto max-w-[1200px] px-4 py-12">
      <div class="border border-solid bg-gray-50 p-6 lg:p-8">
        <p class="leading-loose">
          在这里可以找到 火种档案 Logo 等常用元素，希望能帮助到你。
        </p>
      </div>
      <div class="mt-12">
        <H1>获取 Logo</H1>
        <div class="mt-4 flex flex-col gap-4">
          <div
            class="items-start border border-solid bg-white transition-shadow hover:shadow-lg flex flex-col lg:flex-row lg:divide-y-0 divide-y lg:divide-x divide-x-0">
            <div class="bg-gray-100 p-8 w-full basis-1/3 flex justify-center">
              <img src="~/assets/tac-logo/symbol-black.svg" alt="" class="h-24">
            </div>
            <div class="p-4 basis-2/3">
              <p class="font-bold">Symbol</p>
              <p class="text-gray-500">图形</p>
            </div>
          </div>
          <div
            class="items-start border border-solid bg-white transition-shadow hover:shadow-lg flex flex-col lg:flex-row lg:divide-y-0 divide-y lg:divide-x divide-x-0">
            <div class="bg-gray-100 p-8 w-full basis-1/3 flex justify-center">
              <img src="~/assets/tac-logo/name-black.svg" alt="" class="h-24">
            </div>
            <div class="p-4 basis-2/3 h-full justify-between">
              <p class="font-bold">name</p>
              <p class="text-gray-500">名称</p>
            </div>
          </div>
          <div
            class="items-start border border-solid bg-white transition-shadow hover:shadow-lg flex flex-col lg:flex-row lg:divide-y-0 divide-y lg:divide-x divide-x-0">
            <div class="bg-gray-100 p-8 w-full basis-1/3 flex justify-center">
              <img src="~/assets/tac-logo/type-black.svg" alt="" class="h-24">
            </div>
            <div class="p-4 basis-2/3 h-full justify-between">
              <p class="font-bold">type</p>
              <p class="text-gray-500">英文名称</p>
            </div>
          </div>
          <div
            class="items-start border border-solid bg-white transition-shadow hover:shadow-lg flex flex-col lg:flex-row lg:divide-y-0 divide-y lg:divide-x divide-x-0">
            <div class="bg-gray-100 p-8 w-full basis-1/3 flex justify-center">
              <img src="~/assets/tac-logo/eng-black.svg" alt="" class="h-24">
            </div>
            <div class="p-4 basis-2/3 h-full justify-between">
              <p class="font-bold">eng</p>
              <p class="text-gray-500">英文全称</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "火种档案 | VI指南",
});
</script>

<style></style>