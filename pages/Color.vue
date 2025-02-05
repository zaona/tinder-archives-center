<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-color.png" bannerTitle="颜色" />

    <div class="mx-auto max-w-[1200px] px-4 py-12">
      <TheTitle>流浪地球</TheTitle>
      <div class="mt-2">
        <OriginTag text="来自：哔哩哔哩 · @长期洗涤Longwashing" />
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <div
          class="items-center border border-solid border-gray-200 bg-gray-50 p-4 transition-shadow hover:shadow-lg"
        >
          <div class="flex flex-row justify-between">
            <p class="font-bold text-gray-950">红-1</p>
            <span class="h-[24px] w-[24px] bg-[#EC2021]"></span>
          </div>
          <p class="mt-8 text-gray-500">#EC2021</p>
        </div>
        <div
          class="items-center border border-solid border-gray-200 bg-gray-50 p-4 transition-shadow hover:shadow-lg"
        >
          <div class="flex flex-row justify-between">
            <p class="font-bold text-gray-950">红-2</p>
            <span class="h-[24px] w-[24px] bg-[#FA3E00]"></span>
          </div>
          <p class="mt-8 text-gray-500">#FA3E00</p>
        </div>
      </div>

      <div class="mt-12">
        <TheTitle>地球联合政府</TheTitle>
      </div>
      <div class="mt-2">
        <OriginTag text="来自：UET设计组校准" />
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <div
          class="items-center border border-solid border-gray-200 bg-gray-50 p-4 transition-shadow hover:shadow-lg"
        >
          <div class="flex flex-row justify-between">
            <p class="font-bold text-gray-950">浅蓝</p>
            <span class="h-[24px] w-[24px] bg-[#267F9D]"></span>
          </div>
          <p class="mt-8 text-gray-500">#267F9D</p>
        </div>
      </div>

      <div class="mt-12">
        <TheTitle>北京航天中心</TheTitle>
      </div>
      <div class="mt-2">
        <OriginTag text="来自：机核 · 流浪地球美术设定" />
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <div
          class="items-center border border-solid border-gray-200 bg-gray-50 p-4 transition-shadow hover:shadow-lg"
        >
          <div class="flex flex-row justify-between">
            <p class="font-bold text-gray-950">深蓝</p>
            <span class="h-[24px] w-[24px] bg-[#22408F]"></span>
          </div>
          <p class="mt-8 text-gray-500">#22408F</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "火种档案 | 颜色",
});
</script>

<style></style>
