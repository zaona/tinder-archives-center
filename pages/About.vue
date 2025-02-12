<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-about.png" bannerTitle="关于" />

    <div class="mx-auto max-w-[1200px] px-4 py-12">
      <TheTitle>关于本站</TheTitle>
      <p class="leading-loose text-gray-950">
        在电影《流浪地球1》的结尾，人工智能MOSS宣布“流浪地球计划”未能成功，并随即启动了“火种计划”。该计划旨在通过“领航员号”空间站，携带人类的受精卵、基础农作物种子、人类文明的数字资料库以及部分宇航员，前往距离地球4.2光年的半人马座阿尔法星，以确保人类文明的延续。
      </p>
      <p class="leading-loose text-gray-950">
        “火种档案”
        就是这样一个整合了流浪地球电影中的颜色，字体，标志等内容的网页项目，希望能给各个流浪地球二创作者带来便利。
      </p>

      <div class="mt-12">
        <TheTitle>鸣谢</TheTitle>
      </div>
      <p class="leading-loose text-gray-950">
        衷心感谢电影流浪地球，衷心感谢为本网站提供部分设计资源与改进建议的小破球爱好者们。
      </p>

      <div class="mt-4 grid grid-cols-2 gap-4 text-gray-950 lg:grid-cols-4">
        <Card
          v-for="(contributor, index) in contributors"
          :key="index"
          :title="contributor.name"
          :description="contributor.description"
          :href="contributor.link"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const contributors = [
  {
    name: "海藻酸钠",
    description: "本站设计+前端开发",
    link: "https://space.bilibili.com/518916820",
  },
  {
    name: "terminator7211",
    description: "修复了很多复杂的流浪地球标志",
    link: "https://space.bilibili.com/248314816",
  },
  {
    name: "熔核设计",
    description: "提供了非常多的高质量流浪地球海报以及台词",
    link: "https://space.bilibili.com/502569746",
  },
  {
    name: "江染柳",
    description: "为本站的“小苔藓计划”风格海报提供了手写字支持",
    link: "https://x.com/chianghsiaosui",
  },
  {
    name: "小鱼yuzifu",
    description: "将作者从 js 的水深火热中解脱出来",
  },
  {
    name: "刘lyxAndy",
    description: "帮助改进了网站的部分 js 代码",
  },
  {
    name: "简与不简",
    description: "给网站代码进行了诸多细节优化",
  },
  {
    name: "fish",
    description: "帮助作者找到了很多有用的开发资源",
  },
  {
    name: "小宏XeLa",
    description: "帮助作者找到了很多有用的开发资源",
  },
  {
    name: "叶梦昀",
    description: "提了非常多非常多我完不成的建议...",
  },
];
</script>
