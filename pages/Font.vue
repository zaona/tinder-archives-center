<template>
  <div class="bg-no-repeat bg-cover bg-center bg-[url('~/assets/img/pages-banner/bg-font.png')] w-full h-[160px] mb-12">
    <div class="bg-gradient-to-r from-black/50 h-full">
      <div class="h-full max-w-[1200px] mx-auto pl-4">
        <p class="text-[48px] pt-[56px] text-white leading-[48px]">字体</p>
      </div>
    </div>
  </div>
  <div class="mx-auto max-w-[1200px] px-4 mb-12">
    <div class="mb-12">
      <p class="text-[36px]">流浪地球1</p>
      <div class="flex items-center text-[14px] mt-[16px]">
        <img class="mr-2" src="~/assets/icon/info.svg">来自：电影片尾 · 版权字体支持
      </div>
      <div class="grid lg:grid-cols-5 grid-cols-2 gap-[16px] mt-[16px]">
        <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
          <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">微软雅黑(旧版)</p>
          <img class="w-full h-[100px] bg-gray-50" src="~/assets/img/font/wryh.svg">
        </div>
        <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
          <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">Gobold Thin</p>
          <img class="w-full h-[100px] bg-gray-50" src="~/assets/img/font/gobold.svg">
        </div>
        <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
          <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">禹卫书法行书简体</p>
          <img class="w-full h-[100px] bg-gray-50" src="~/assets/img/font/yw.svg">
        </div>
        <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
          <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">李旭科书法</p>
          <img class="w-full h-[100px] bg-gray-50" src="~/assets/img/font/lxk.svg">
        </div>
        <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
          <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">Candara</p>
          <img class="w-full h-[100px] bg-gray-50" src="~/assets/img/font/candara.svg">
        </div>
      </div>
      <div class="flex items-center text-[14px] mt-[16px]">
        <img class="mr-2" src="~/assets/icon/info.svg">来自：知乎 · @Jerry
      </div>
      <div class="grid lg:grid-cols-5 grid-cols-2 gap-[16px] mt-[16px] mb-[16px]">
        <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
          <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">新蒂赵孟頫体</p>
          <img class="w-full h-[100px] bg-gray-50" src="~/assets/img/font/zmf.svg">
        </div>
      </div>
    </div>
    <div class="mb-12">
      <p class="text-[36px]">流浪地球2</p>
      <div class="flex items-center text-[14px] mt-[16px]">
        <img class="mr-2" src="~/assets/icon/info.svg">来自：流浪地球2制作手记 | 哔哩哔哩 · @RQvan
      </div>
      <div class="grid lg:grid-cols-5 grid-cols-2 gap-[16px] mt-[16px]">
        <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
          <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">思源黑体</p>
          <img class="w-full h-[100px] bg-gray-50" src="~/assets/img/font/sy.svg">
        </div>
        <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
          <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">Rajdhani</p>
          <img class="w-full h-[100px] bg-gray-50" src="~/assets/img/font/rajdhani.svg">
        </div>
        <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
          <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">字魂创粗黑</p>
          <img class="w-full h-[100px] bg-gray-50" src="~/assets/img/font/cch.svg">
        </div>
        <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
          <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">胡晓波真帅体</p>
          <img class="w-full h-[100px] bg-gray-50" src="~/assets/img/font/hxbzs.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '#app'

useHead({
  title: '火种档案 | 字体',
  meta: [
    { name: 'description', content: 'Page description' }
  ]
})
</script>

<style></style>