<template>
  <div>
    <Banner backgroundImage="/img/pages-banner/bg-more.png" title="更多" />

    <div class="mx-auto max-w-[1200px] px-4 py-12">
      <div class="space-y-12">
        <!-- 工具 -->
        <div>
          <TheTitle>工具</TheTitle>
          <div class="mt-2">
            <OriginTag text="以下内容来源于网络，仅收录" />
          </div>
          <div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <NormalCard
              v-for="(tool, index) in tools"
              :key="index"
              :title="tool.name"
              :description="tool.description"
              :href="tool.link"
            />
          </div>
        </div>

        <!-- 电影 -->
        <div>
          <TheTitle>电影</TheTitle>
          <div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <NormalCard
              v-for="(movie, index) in movies"
              :key="index"
              :title="movie.name"
              :description="movie.description"
              :href="movie.link"
            />
          </div>
        </div>

        <!-- 书籍 -->
        <div>
          <TheTitle>书籍</TheTitle>
          <div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <NormalCard
              v-for="(book, index) in books"
              :key="index"
              :title="book.name"
              :description="book.description"
              :href="book.link"
            />
          </div>
        </div>
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
useHead({
  title: "更多",
});

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

const movies = [
  {
    name: "流浪地球",
    description:
      '2019年中国科幻电影，讲述了太阳即将毁灭，人类启动"流浪地球"计划，推动地球离开太阳系的故事。',
    link: "https://movie.douban.com/subject/26266893/",
  },
  {
    name: "流浪地球2",
    description:
      "2023年中国科幻电影，讲述了人类为拯救地球，建造发动机推动地球逃离太阳系的故事。",
    link: "https://movie.douban.com/subject/35267208/",
  },
  {
    name: "流浪地球2：再次冒险",
    description: "该纪录片将带观众深入探索《流浪地球2》的幕后世界",
    link: "https://movie.douban.com/subject/36233343/",
  },
];

const books = [
  {
    name: "流浪地球",
    description:
      "科学家们发现太阳将膨胀为一颗巨大红星，期间地球表面上的一切将毁灭殆尽，于是他们计划建造能将地球发射到其他星球的巨大引擎，以保证人类长远生存。",
    link: "https://book.douban.com/subject/30443982/",
  },
  {
    name: "流浪地球电影制作手记",
    description:
      "本书全面记录了国产科幻巨制《流浪地球》从开发策划、建组筹备、开机拍摄，再到后期视效合成的制作全流程。",
    link: "https://book.douban.com/subject/30437364/",
  },
  {
    name: "流浪地球2电影制作手记",
    description:
      "《流浪地球2》官方授权电影制作全记录，披露创制细节和十万字完整世界观。一览中国科幻电影制作流程，看中国力量如何成就中国想象。",
    link: "https://book.douban.com/subject/36222900/",
  },
];
</script>
