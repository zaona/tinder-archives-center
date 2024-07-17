<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-color.png" bannerTitle="颜色" />
    <div class="mx-auto max-w-[1200px] px-4 mb-12">
      <div class="mb-12">
        <p class="text-[36px]">流浪地球</p>
        <div class="flex items-center text-[14px] mt-[16px]">
          <img class="mr-2" src="~/assets/icon/info.svg">来自：哔哩哔哩 · @长期洗涤Longwashing
        </div>
        <div class="grid lg:grid-cols-5 grid-cols-2 gap-[16px] mt-[16px]">
          <div class="bg-white items-center px-[16px] py-[16px] border-solid border transition-shadow hover:shadow-lg">
            <div class="flex flex-row justify-between h-[56px]">
              <p class="text-[16px] font-bold">红-1</p>
              <span class="w-[24px] h-[24px] bg-[#EC2021]"></span>
            </div>
            <p class="text-[16px] text-gray-500">#EC2021</p>
          </div>
          <div class="bg-white items-center px-[16px] py-[16px] border-solid border transition-shadow hover:shadow-lg">
            <div class="flex flex-row justify-between h-[56px]">
              <p class="text-[16px] font-bold">红-2</p>
              <span class="w-[24px] h-[24px] bg-[#FA3E00]"></span>
            </div>
            <p class="text-[16px] text-gray-500">#FA3E00</p>
          </div>
        </div>
      </div>
      <div class="mb-12">
        <p class="text-[36px]">地球联合政府</p>
        <div class="flex items-center text-[14px] mt-[16px]">
          <img class="mr-2" src="~/assets/icon/info.svg">来自：UET设计组校准
        </div>
        <div class="grid lg:grid-cols-5 grid-cols-2 gap-[16px] mt-[16px]">
          <div class="bg-white items-center px-[16px] py-[16px] border-solid border transition-shadow hover:shadow-lg">
            <div class="flex flex-row justify-between h-[56px]">
              <p class="text-[16px] font-bold">浅蓝</p>
              <span class="w-[24px] h-[24px] bg-[#267F9D]"></span>
            </div>
            <p class="text-[16px] text-gray-500">#267F9D</p>
          </div>
        </div>
      </div>
      <div class="mb-12">
        <p class="text-[36px]">北京航天中心</p>
        <div class="flex items-center text-[14px] mt-[16px]">
          <img class="mr-2" src="~/assets/icon/info.svg">来自：机核 · 流浪地球美术设定
        </div>
        <div class="grid lg:grid-cols-5 grid-cols-2 gap-[16px] mt-[16px]">
          <div class="bg-white items-center px-[16px] py-[16px] border-solid border transition-shadow hover:shadow-lg">
            <div class="flex flex-row justify-between h-[56px]">
              <p class="text-[16px] font-bold">深蓝</p>
              <span class="w-[24px] h-[24px] bg-[#22408F]"></span>
            </div>
            <p class="text-[16px] text-gray-500">#22408F</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '#app'

useHead({
  title: '火种档案 | 颜色',
  meta: [
    { name: 'description', content: 'Page description' }
  ]
})
</script>

<style></style>