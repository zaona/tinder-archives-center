<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-tool.png" bannerTitle="工具" />

    <div class="mx-auto max-w-[1200px] px-4 py-12">
      <H1>来自网络</H1>
      <div class="mt-2">
        <OriginTag text="以下内容来源于网络，仅收录" />
      </div>
      <div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <a target="_blank" class="" href="https://unitedearth.wiki/">
          <div class="relative h-full transition-shadow hover:shadow-lg">
            <div
              class="flex h-full flex-col items-center divide-y border border-solid"
            >
              <div class="flex w-full items-center justify-between p-4">
                <p class="font-bold">地球联合百科</p>
              </div>
              <p class="w-full p-4">一个《流浪地球》系列设定及二创 Wiki</p>
            </div>
            <div
              class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100"
            >
              <img
                class="absolute right-[18px] top-[18px]"
                src="~/assets/icon/arrow.svg"
              />
            </div>
          </div>
        </a>
        <a
          target="_blank"
          class=""
          href="https://lab.wsm.ink/the-wandering-earth-2-countdown/#/"
        >
          <div class="relative h-full transition-shadow hover:shadow-lg">
            <div
              class="flex h-full flex-col items-center divide-y border border-solid"
            >
              <div class="flex w-full items-center justify-between p-4">
                <p class="font-bold">The Wandering Earth 2 Countdown</p>
              </div>
              <p class="w-full p-4">流浪地球2的倒计时梗图生成器</p>
            </div>
            <div
              class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100"
            >
              <img
                class="absolute right-[18px] top-[18px]"
                src="~/assets/icon/arrow.svg"
              />
            </div>
          </div>
        </a>
        <a
          target="_blank"
          class=""
          href="https://xiaohong2022.github.io/h5-wandering-earth/"
        >
          <div class="relative h-full transition-shadow hover:shadow-lg">
            <div
              class="flex h-full flex-col items-center divide-y border border-solid"
            >
              <div class="flex w-full items-center justify-between p-4">
                <p class="font-bold">h5-wandering-earth</p>
              </div>
              <p class="w-full p-4">《流浪地球2》倒计时制作</p>
            </div>
            <div
              class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100"
            >
              <img
                class="absolute right-[18px] top-[18px]"
                src="~/assets/icon/arrow.svg"
              />
            </div>
          </div>
        </a>
        <a target="_blank" class="" href="https://uegov.world/ueg-card/">
          <div class="relative h-full transition-shadow hover:shadow-lg">
            <div
              class="flex h-full flex-col items-center divide-y border border-solid"
            >
              <div class="flex w-full items-center justify-between p-4">
                <p class="font-bold">UEG 名牌生成</p>
              </div>
              <p class="w-full p-4">制作地球联合政府专属名牌</p>
            </div>
            <div
              class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100"
            >
              <img
                class="absolute right-[18px] top-[18px]"
                src="~/assets/icon/arrow.svg"
              />
            </div>
          </div>
        </a>
        <a target="_blank" class="" href="https://uegov.world/random-draw/">
          <div class="relative h-full transition-shadow hover:shadow-lg">
            <div
              class="flex h-full flex-col items-center divide-y border border-solid"
            >
              <div class="flex w-full items-center justify-between p-4">
                <p class="font-bold">地下城居住资格抽签</p>
              </div>
              <p class="w-full p-4">地下城资格抽签</p>
            </div>
            <div
              class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100"
            >
              <img
                class="absolute right-[18px] top-[18px]"
                src="~/assets/icon/arrow.svg"
              />
            </div>
          </div>
        </a>
        <a
          target="_blank"
          class=""
          href="https://github.com/picasso250/spring12"
        >
          <div class="relative h-full transition-shadow hover:shadow-lg">
            <div
              class="flex h-full flex-col items-center divide-y border border-solid"
            >
              <div class="flex w-full items-center justify-between p-4">
                <p class="font-bold">spring12</p>
              </div>
              <p class="w-full p-4">春节十二响</p>
            </div>
            <div
              class="absolute right-0 top-0 h-full w-full divide-y-0 opacity-0 transition-opacity hover:opacity-100"
            >
              <img
                class="absolute right-[18px] top-[18px]"
                src="~/assets/icon/arrow.svg"
              />
            </div>
          </div>
        </a>
      </div>
      <img
        class="mx-auto mt-12 w-[300px]"
        src="~/assets/img/illus/thanks.svg"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "火种档案 | 工具",
});
</script>

<style></style>
