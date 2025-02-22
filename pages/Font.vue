<template>
  <div>
    <Banner backgroundImage="/img/pages-banner/bg-font.png" title="字体" />

    <div class="mx-auto max-w-[1200px] px-4 py-12">
      <TheTitle>流浪地球1</TheTitle>
      <div class="mt-2">
        <OriginTag text="来自：电影片尾 · 版权字体支持" />
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <NormalCard
          v-for="(font, index) in fonts"
          :key="index"
          :title="font.name"
          :imageSrc="font.imageSrc"
        />
      </div>
      <div class="mt-4">
        <OriginTag text="来自：知乎 · @Jerry" />
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <NormalCard
          v-for="(font, index) in fonts2"
          :key="index"
          :title="font.name"
          :imageSrc="font.imageSrc"
        />
      </div>

      <div class="mt-12">
        <TheTitle>流浪地球2</TheTitle>
      </div>
      <div class="mt-2">
        <OriginTag text="来自：流浪地球2制作手记 | 哔哩哔哩 · @RQvan" />
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <NormalCard
          v-for="(font, index) in fonts3"
          :key="index"
          :title="font.name"
          :imageSrc="font.imageSrc"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "火种档案 | 字体",
});

const fonts = [
  {
    name: "微软雅黑(旧版)",
    imageSrc: "/img/font/wryh.svg",
  },
  {
    name: "Gobold Thin",
    imageSrc: "/img/font/gobold.svg",
  },
  {
    name: "禹卫书法行书简体",
    imageSrc: "/img/font/yw.svg",
  },
  {
    name: "李旭科书法",
    imageSrc: "/img/font/lxk.svg",
  },
  {
    name: "Candara",
    imageSrc: "/img/font/candara.svg",
  },
];

const fonts2 = [
  {
    name: "新蒂赵孟頫体",
    imageSrc: "/img/font/zmf.svg",
  },
];

const fonts3 = [
  {
    name: "思源黑体",
    imageSrc: "/img/font/sy.svg",
  },
  {
    name: "Rajdhani",
    imageSrc: "/img/font/rajdhani.svg",
  },
  {
    name: "字魂创粗黑",
    imageSrc: "/img/font/cch.svg",
  },
  {
    name: "胡晓波真帅体",
    imageSrc: "/img/font/hxbzs.svg",
  },
];
</script>
