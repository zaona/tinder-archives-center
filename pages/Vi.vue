<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-vi.png" bannerTitle="VI 指南" />

    <div class="mx-auto max-w-[1200px] py-12">
      <div class="px-0 lg:px-4">
        <div class="border border-solid border-gray-200 bg-gray-50 p-6 lg:p-8">
          <p class="leading-loose text-gray-950">
            在这里可以找到 火种档案 Logo 等常用元素，希望能帮助到你。
          </p>
        </div>
      </div>

      <div class="mt-12 px-4">
        <TheTitle>获取 Logo</TheTitle>
        <div class="mt-4 flex flex-col gap-4">
          <div
            class="flex flex-col items-start divide-x-0 divide-y divide-gray-200 border border-solid border-gray-200 bg-gray-50 transition-shadow hover:shadow-lg lg:flex-row lg:divide-x lg:divide-y-0"
          >
            <div class="flex w-full basis-1/3 justify-center p-8">
              <imgView imgSrc="/tac-logo/symbol-black.svg" name="symbol">
                <img
                  src="/tac-logo/symbol-black.svg"
                  alt="symbol"
                  class="h-24"
                />
              </imgView>
            </div>
            <div class="basis-2/3 p-4">
              <p class="font-bold text-gray-950">symbol</p>
              <p class="text-gray-500">图形</p>
            </div>
          </div>
          <div
            class="flex flex-col items-start divide-x-0 divide-y divide-gray-200 border border-solid border-gray-200 bg-gray-50 transition-shadow hover:shadow-lg lg:flex-row lg:divide-x lg:divide-y-0"
          >
            <div class="flex w-full basis-1/3 justify-center p-8">
              <imgView imgSrc="/tac-logo/name-black.svg" name="name">
                <img src="/tac-logo/name-black.svg" alt="name" class="h-24" />
              </imgView>
            </div>
            <div class="h-full basis-2/3 justify-between p-4">
              <p class="font-bold text-gray-950">name</p>
              <p class="text-gray-500">名称</p>
            </div>
          </div>
          <div
            class="flex flex-col items-start divide-x-0 divide-y divide-gray-200 border border-solid border-gray-200 bg-gray-50 transition-shadow hover:shadow-lg lg:flex-row lg:divide-x lg:divide-y-0"
          >
            <div class="flex w-full basis-1/3 justify-center p-8">
              <imgView imgSrc="/tac-logo/type-black.svg" name="type">
                <img src="/tac-logo/type-black.svg" alt="type" class="h-24" />
              </imgView>
            </div>
            <div class="h-full basis-2/3 justify-between p-4">
              <p class="font-bold text-gray-950">type</p>
              <p class="text-gray-500">英文名称</p>
            </div>
          </div>
          <div
            class="flex flex-col items-start divide-x-0 divide-y divide-gray-200 border border-solid border-gray-200 bg-gray-50 transition-shadow hover:shadow-lg lg:flex-row lg:divide-x lg:divide-y-0"
          >
            <div class="flex w-full basis-1/3 justify-center p-8">
              <imgView imgSrc="/tac-logo/eng-black.svg" name="eng">
                <img src="/tac-logo/eng-black.svg" alt="eng" class="h-24" />
              </imgView>
            </div>
            <div class="h-full basis-2/3 justify-between p-4">
              <p class="font-bold text-gray-950">eng</p>
              <p class="text-gray-500">英文全称</p>
            </div>
          </div>
          <div
            class="flex flex-col items-start divide-x-0 divide-y divide-gray-200 border border-solid border-gray-200 bg-gray-50 transition-shadow hover:shadow-lg lg:flex-row lg:divide-x lg:divide-y-0"
          >
            <div class="flex w-full basis-1/3 justify-center p-8">
              <imgView
                imgSrc="/tac-logo/symbol-type-black.svg"
                name="symbol-type"
              >
                <img
                  src="/tac-logo/symbol-type-black.svg"
                  alt="symbol-type"
                  class="h-24"
                />
              </imgView>
            </div>
            <div class="h-full basis-2/3 justify-between p-4">
              <p class="font-bold text-gray-950">symbol-type</p>
              <p class="text-gray-500">组合方式1</p>
            </div>
          </div>
          <div
            class="flex flex-col items-start divide-x-0 divide-y divide-gray-200 border border-solid border-gray-200 bg-gray-50 transition-shadow hover:shadow-lg lg:flex-row lg:divide-x lg:divide-y-0"
          >
            <div class="flex w-full basis-1/3 justify-center p-8">
              <imgView
                imgSrc="/tac-logo/symbol-name-type-black.svg"
                name="symbol-name-type"
              >
                <img
                  src="/tac-logo/symbol-name-type-black.svg"
                  alt="symbol-name-type"
                  class="h-24"
                />
              </imgView>
            </div>
            <div class="h-full basis-2/3 justify-between p-4">
              <p class="font-bold text-gray-950">symbol-name-type</p>
              <p class="text-gray-500">组合方式2</p>
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
