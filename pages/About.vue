<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-about.png" bannerTitle="关于" />

    <div class="mx-auto max-w-[1200px] px-4 py-12">
      <TheTitle>关于本站</TheTitle>
      <p class="leading-loose">
        在《流浪地球 1》的结尾处，MOSS 宣告 “流浪地球计划” 以失败告终，启动
        “火种计划” ，让 “领航员号”
        空间站携带着人类受精卵、基础农作物的种子、人类文明的数字资料库以及部分宇航员飞往四光年外的半人马座，以延续人类文明。
      </p>
      <p class="leading-loose">
        “火种档案”
        目前整合了流浪地球电影中的颜色，字体，标志等内容，未来将会持续更新，
      </p>
      <p class="leading-loose">希望能给各个流浪地球二创作者带来便利。</p>

      <div class="mt-12">
        <TheTitle>鸣谢</TheTitle>
      </div>
      <p class="leading-loose">
        衷心感谢电影流浪地球，衷心感谢为本网站提供部分设计资源与改进建议的小破球爱好者们。
      </p>

      <div class="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <a
          target="_blank"
          class="group"
          href="https://space.bilibili.com/518916820"
        >
          <div class="relative h-full transition-shadow group-hover:shadow-lg">
            <div
              class="flex h-full flex-col items-center divide-y border border-solid"
            >
              <p class="w-full p-4 font-bold">海藻酸钠</p>
              <p class="w-full p-4">本站设计+前端开发</p>
            </div>
            <img
              class="absolute right-[18px] top-[18px] opacity-0 transition-opacity group-hover:opacity-100"
              src="~/assets/icon/arrow.svg"
              alt="前往"
            />
          </div>
        </a>
        <a
          target="_blank"
          class="group"
          href="https://space.bilibili.com/248314816"
        >
          <div class="relative h-full transition-shadow group-hover:shadow-lg">
            <div
              class="flex h-full flex-col items-center divide-y border border-solid"
            >
              <div class="flex h-full w-full items-center justify-between p-4">
                <img
                  class="h-4"
                  src="~/assets/img/about/terminator7211.svg"
                  alt="terminator7211"
                />
              </div>
              <p class="w-full p-4"
                >本站Logo作者，修复了很多复杂的流浪地球标志</p
              >
            </div>
            <img
              class="absolute right-[18px] top-[18px] opacity-0 transition-opacity group-hover:opacity-100"
              src="~/assets/icon/arrow.svg"
              alt="前往"
            />
          </div>
        </a>
        <a
          target="_blank"
          class="group"
          href="https://space.bilibili.com/502569746"
        >
          <div class="relative h-full transition-shadow group-hover:shadow-lg">
            <div
              class="flex h-full flex-col items-center divide-y border border-solid"
            >
              <div class="flex h-full w-full items-center justify-between p-4">
                <img
                  class="h-4"
                  src="~/assets/img/about/coresign.svg"
                  alt="熔核设计"
                />
              </div>
              <p class="w-full p-4">提供了非常多的高质量流浪地球海报以及台词</p>
            </div>
            <img
              class="absolute right-[18px] top-[18px] opacity-0 transition-opacity group-hover:opacity-100"
              src="~/assets/icon/arrow.svg"
              alt="前往"
            />
          </div>
        </a>
        <div
          class="flex flex-col items-center divide-y border border-solid transition-shadow hover:shadow-lg"
        >
          <p class="w-full p-4 font-bold">梅花糕糕</p>
          <p class="w-full p-4">为本站的“小苔藓计划”风格海报提供了手写字支持</p>
        </div>
        <div
          class="flex flex-col items-center divide-y border border-solid transition-shadow hover:shadow-lg"
        >
          <p class="w-full p-4 font-bold">小鱼yuzifu</p>
          <p class="w-full p-4">将作者从 js 的水深火热中解脱出来</p>
        </div>
        <div
          class="flex flex-col items-center divide-y border border-solid transition-shadow hover:shadow-lg"
        >
          <p class="w-full p-4 font-bold">刘lyxAndy</p>
          <p class="w-full p-4">帮助改进了网站的部分 js 代码</p>
        </div>
        <div
          class="flex flex-col items-center divide-y border border-solid transition-shadow hover:shadow-lg"
        >
          <p class="w-full p-4 font-bold">简与不简</p>
          <p class="w-full p-4">给网站代码进行了诸多细节优化</p>
        </div>
        <div
          class="flex flex-col items-center divide-y border border-solid transition-shadow hover:shadow-lg"
        >
          <p class="w-full p-4 font-bold">fish</p>
          <p class="w-full p-4">帮助作者找到了很多有用的开发资源</p>
        </div>
        <div
          class="flex flex-col items-center divide-y border border-solid transition-shadow hover:shadow-lg"
        >
          <p class="w-full p-4 font-bold">小宏XeLa</p>
          <p class="w-full p-4">帮助作者找到了很多有用的开发资源</p>
        </div>
        <div
          class="flex flex-col items-center divide-y border border-solid transition-shadow hover:shadow-lg"
        >
          <p class="w-full p-4 font-bold">叶梦昀</p>
          <p class="w-full p-4">提了非常多非常多我完不成的建议...</p>
        </div>
      </div>
      <img
        class="mx-auto mt-12 w-[300px]"
        src="~/assets/img/illus/thanks.svg"
        alt="感谢我们的家人，你们的爱是我们的发动机"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "火种档案 | 关于",
});
</script>

<style></style>
