<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-tool.png" bannerTitle="工具" />

    <div class="mx-auto max-w-[1200px] px-4 py-12">
      <p class="mb-[12px] text-[36px]">来自网络</p>
      <div class="">
        <div class="mt-[16px]">
          <OriginTag text="以下内容来源于网络，仅收录" />
        </div>
        <div class="mt-[16px] grid grid-cols-2 gap-[16px] lg:grid-cols-4">
          <a target="_blank" class="" href="https://unitedearth.wiki/">
            <div class="relative h-full transition-shadow hover:shadow-lg">
              <div class="flex h-full flex-col items-center divide-y border border-solid">
                <div class="flex w-full items-center justify-between px-[16px] py-[16px]">
                  <p class="text-[16px] font-bold">地球联合百科</p>
                </div>
                <p class="w-full px-[16px] py-[16px] text-[16px]">
                  一个《流浪地球》系列设定及二创 Wiki
                </p>
              </div>
              <div
                class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100">
                <img class="absolute right-[18px] top-[18px]" src="~/assets/icon/arrow.svg" />
              </div>
            </div>
          </a>
          <a target="_blank" class="" href="https://lab.wsm.ink/the-wandering-earth-2-countdown/#/">
            <div class="relative h-full transition-shadow hover:shadow-lg">
              <div class="flex h-full flex-col items-center divide-y border border-solid">
                <div class="flex w-full items-center justify-between px-[16px] py-[16px]">
                  <p class="text-[16px] font-bold">
                    The Wandering Earth 2 Countdown
                  </p>
                </div>
                <p class="w-full px-[16px] py-[16px] text-[16px]">
                  流浪地球2的倒计时梗图生成器
                </p>
              </div>
              <div
                class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100">
                <img class="absolute right-[18px] top-[18px]" src="~/assets/icon/arrow.svg" />
              </div>
            </div>
          </a>
          <a target="_blank" class="" href="https://xiaohong2022.github.io/h5-wandering-earth/">
            <div class="relative h-full transition-shadow hover:shadow-lg">
              <div class="flex h-full flex-col items-center divide-y border border-solid">
                <div class="flex w-full items-center justify-between px-[16px] py-[16px]">
                  <p class="text-[16px] font-bold">h5-wandering-earth</p>
                </div>
                <p class="w-full px-[16px] py-[16px] text-[16px]">
                  《流浪地球2》倒计时制作
                </p>
              </div>
              <div
                class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100">
                <img class="absolute right-[18px] top-[18px]" src="~/assets/icon/arrow.svg" />
              </div>
            </div>
          </a>
          <a target="_blank" class="" href="https://uegov.world/ueg-card/">
            <div class="relative h-full transition-shadow hover:shadow-lg">
              <div class="flex h-full flex-col items-center divide-y border border-solid">
                <div class="flex w-full items-center justify-between px-[16px] py-[16px]">
                  <p class="text-[16px] font-bold">UEG 名牌生成</p>
                </div>
                <p class="w-full px-[16px] py-[16px] text-[16px]">
                  制作地球联合政府专属名牌
                </p>
              </div>
              <div
                class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100">
                <img class="absolute right-[18px] top-[18px]" src="~/assets/icon/arrow.svg" />
              </div>
            </div>
          </a>
          <a target="_blank" class="" href="https://uegov.world/random-draw/">
            <div class="relative h-full transition-shadow hover:shadow-lg">
              <div class="flex h-full flex-col items-center divide-y border border-solid">
                <div class="flex w-full items-center justify-between px-[16px] py-[16px]">
                  <p class="text-[16px] font-bold">地下城居住资格抽签</p>
                </div>
                <p class="w-full px-[16px] py-[16px] text-[16px]">
                  地下城资格抽签
                </p>
              </div>
              <div
                class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100">
                <img class="absolute right-[18px] top-[18px]" src="~/assets/icon/arrow.svg" />
              </div>
            </div>
          </a>
          <a target="_blank" class="" href="https://github.com/picasso250/spring12">
            <div class="relative h-full transition-shadow hover:shadow-lg">
              <div class="flex h-full flex-col items-center divide-y border border-solid">
                <div class="flex w-full items-center justify-between px-[16px] py-[16px]">
                  <p class="text-[16px] font-bold">spring12</p>
                </div>
                <p class="w-full px-[16px] py-[16px] text-[16px]">春节十二响</p>
              </div>
              <div
                class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100">
                <img class="absolute right-[18px] top-[18px]" src="~/assets/icon/arrow.svg" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <img class="mx-auto mt-12 w-[300px]" src="~/assets/img/illus/thanks.svg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '火种档案 | 工具',
})
</script>

<style></style>
