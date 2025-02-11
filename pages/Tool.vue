<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-tool.png" bannerTitle="工具" />

    <div class="mx-auto max-w-[1200px] px-4 py-12">
      <TheTitle>来自网络</TheTitle>
      <div class="mt-2">
        <OriginTag text="以下内容来源于网络，仅收录" />
      </div>
      <div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card
          v-for="(tool, index) in tools"
          :key="index"
          :title="tool.name"
          :description="tool.description"
          :href="tool.link"
        />
      </div>
      <img
        class="mx-auto mt-12 w-[300px] dark:invert"
        src="~/assets/img/illus/thanks.svg"
        alt="感谢我们的家人，你们的爱是我们的发动机"
      />
    </div>
  </div>
</template>

<script setup>
import Card from "~/components/Card.vue";

const tools = [
  {
    link: "https://unitedearth.wiki/",
    name: "地球联合百科",
    description: "一个《流浪地球》系列设定及二创 Wiki",
  },
  {
    link: "https://xiaohong2022.github.io/h5-wandering-earth/",
    name: "h5-wandering-earth",
    description: "《流浪地球2》倒计时制作",
  },
  {
    link: "https://uegov.world/ueg-card/",
    name: "UEG 名牌生成",
    description: "制作地球联合政府专属名牌",
  },
  {
    link: "https://uegov.world/random-draw/",
    name: "地下城居住资格抽签",
    description: "地下城资格抽签",
  },
  {
    link: "https://github.com/picasso250/spring12",
    name: "spring12",
    description: "春节十二响",
  },
];
</script>
