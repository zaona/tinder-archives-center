<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-tool.png" bannerTitle="工具" />

    <div class="mx-auto max-w-[1200px] px-4 mb-12">
      <p class="text-[36px] mt-[48px] mb-[12px]">来自网络</p>
      <div class="">
        <div class="flex items-center text-[14px] mt-[16px]">
          <img class="mr-2 mb-0.5" src="~/assets/icon/info.svg">以下内容来源于网络，仅收录
        </div>
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-[16px] mt-[16px]">
          <a target="_blank" class="" href="https://unitedearth.wiki/">
            <div class="relative transition-shadow hover:shadow-lg h-full">
              <div class="flex flex-col items-center border-solid border divide-y h-full">
                <div class="flex items-center justify-between px-[16px] py-[16px] w-full">
                  <p class="text-[16px] font-bold">地球联合百科</p>
                </div>
                <p class="text-[16px] px-[16px] py-[16px] w-full">一个《流浪地球》系列设定及二创 Wiki</p>
              </div>
              <div
                class="absolute w-full h-full top-0 right-0 opacity-0 hover:opacity-100 transition-opacity divide-y-0">
                <img class="absolute top-[18px] right-[18px]" src="~/assets/icon/arrow.svg">
              </div>
            </div>
          </a>
          <a target="_blank" class="" href="https://lab.wsm.ink/the-wandering-earth-2-countdown/#/">
            <div class="relative transition-shadow hover:shadow-lg h-full">
              <div class="flex flex-col items-center border-solid border divide-y h-full">
                <div class="flex items-center justify-between px-[16px] py-[16px] w-full">
                  <p class="text-[16px] font-bold">The Wandering Earth 2 Countdown</p>
                </div>
                <p class="text-[16px] px-[16px] py-[16px] w-full">流浪地球2的倒计时梗图生成器</p>
              </div>
              <div
                class="absolute w-full h-full top-0 right-0 opacity-0 hover:opacity-100 transition-opacity divide-y-0">
                <img class="absolute top-[18px] right-[18px]" src="~/assets/icon/arrow.svg">
              </div>
            </div>
          </a>
          <a target="_blank" class="" href="https://xiaohong2022.github.io/h5-wandering-earth/">
            <div class="relative transition-shadow hover:shadow-lg h-full">
              <div class="flex flex-col items-center border-solid border divide-y h-full">
                <div class="flex items-center justify-between px-[16px] py-[16px] w-full">
                  <p class="text-[16px] font-bold">h5-wandering-earth</p>
                </div>
                <p class="text-[16px] px-[16px] py-[16px] w-full">《流浪地球2》倒计时制作</p>
              </div>
              <div
                class="absolute w-full h-full top-0 right-0 opacity-0 hover:opacity-100 transition-opacity divide-y-0">
                <img class="absolute top-[18px] right-[18px]" src="~/assets/icon/arrow.svg">
              </div>
            </div>
          </a>
          <a target="_blank" class="" href="https://uegov.world/ueg-card/">
            <div class="relative transition-shadow hover:shadow-lg h-full">
              <div class="flex flex-col items-center border-solid border divide-y h-full">
                <div class="flex items-center justify-between px-[16px] py-[16px] w-full">
                  <p class="text-[16px] font-bold">UEG 名牌生成</p>
                </div>
                <p class="text-[16px] px-[16px] py-[16px] w-full">制作地球联合政府专属名牌</p>
              </div>
              <div
                class="absolute w-full h-full top-0 right-0 opacity-0 hover:opacity-100 transition-opacity divide-y-0">
                <img class="absolute top-[18px] right-[18px]" src="~/assets/icon/arrow.svg">
              </div>
            </div>
          </a>
          <a target="_blank" class="" href="https://uegov.world/random-draw/">
            <div class="relative transition-shadow hover:shadow-lg h-full">
              <div class="flex flex-col items-center border-solid border divide-y h-full">
                <div class="flex items-center justify-between px-[16px] py-[16px] w-full">
                  <p class="text-[16px] font-bold">地下城居住资格抽签</p>
                </div>
                <p class="text-[16px] px-[16px] py-[16px] w-full">地下城资格抽签</p>
              </div>
              <div
                class="absolute w-full h-full top-0 right-0 opacity-0 hover:opacity-100 transition-opacity divide-y-0">
                <img class="absolute top-[18px] right-[18px]" src="~/assets/icon/arrow.svg">
              </div>
            </div>
          </a>
          <a target="_blank" class="" href="https://github.com/picasso250/spring12">
            <div class="relative transition-shadow hover:shadow-lg h-full">
              <div class="flex flex-col items-center border-solid border divide-y h-full">
                <div class="flex items-center justify-between px-[16px] py-[16px] w-full">
                  <p class="text-[16px] font-bold">spring12</p>
                </div>
                <p class="text-[16px] px-[16px] py-[16px] w-full">春节十二响</p>
              </div>
              <div
                class="absolute w-full h-full top-0 right-0 opacity-0 hover:opacity-100 transition-opacity divide-y-0">
                <img class="absolute top-[18px] right-[18px]" src="~/assets/icon/arrow.svg">
              </div>
            </div>
          </a>
        </div>
      </div>
      <img class="w-[300px] mx-auto mt-[48px]" src="~/assets/img/illus/thanks.svg">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '#app'

useHead({
  title: '火种档案 | 工具',
  meta: [
    { name: 'description', content: 'Page description' }
  ]
})
</script>

<style></style>