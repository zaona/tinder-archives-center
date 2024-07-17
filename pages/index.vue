<template>
  <div>
    <div
      class="h-[620px] w-full bg-none bg-cover bg-no-repeat lg:bg-[url('~/assets/img/illus/index-bg.svg')]"
    >
      <div class="mx-auto h-full max-w-[1200px] px-4 pt-[220px]">
        <img
          class="h-[95px] bg-white pr-20 lg:pr-0"
          src="~/assets/tac-logo/name-mix.svg"
        />
        <p class="w-[350px] bg-white pl-1 pt-3 text-3xl font-bold">
          Tinder Archives Center
        </p>
        <p class="w-[250px] bg-white pl-1 pt-4 font-bold">
          一个「流浪地球」设计资源站
        </p>
        <div class="flex justify-end pt-10">
          <img
            class="mr-[50px] w-[140px] lg:hidden"
            src="~/assets/img/illus/little-white.svg"
          />
        </div>
      </div>
    </div>

    <div class="mx-auto my-[80px] max-w-[1200px] px-0 lg:px-4">
      <div
        class="h-full w-full border border-solid px-6 py-6 transition-shadow lg:px-8 lg:py-8 lg:hover:shadow-lg"
      >
        <p class="text-2xl font-bold" ref="displayElement">
          {{ displaySentence }}
        </p>
        <div class="mt-4 flex items-center justify-between">
          <div class="flex items-center">
            <img class="mr-2" src="~/assets/icon/info.svg" />
            <p class="text-sm" ref="categoryElement">{{ displayCategory }}</p>
          </div>
          <img
            id="generateButton"
            class="mr-2 cursor-pointer"
            @click="updateSentence"
            src="~/assets/icon/refresh.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

interface Sentence {
  sentence: string;
  category: string;
}

const oneSentences: Sentence[] = [
  { sentence: "这小小的白点，是我们的一切。", category: "周喆直 流浪地球2" },
  {
    sentence:
      "北京第三区交通委提醒您：道路千万条，安全第一条。行车不规范，亲人两行泪。",
    category: "流浪地球1",
  },
  {
    sentence: "无论结果如何，人类的勇气和坚毅，都被镌刻在星空下。",
    category: "流浪地球1",
  },
  { sentence: "希望是这个时代的黄金和宝石。", category: "流浪地球原著" },
  {
    sentence:
      "人类之所以不同，是因为面对恐惧，总会有人拥有跨越历史、当下和未来的勇气",
    category: "周喆直 流浪地球3",
  },
  { sentence: "团结，延续着人类文明的火种！", category: "周喆直 流浪地球2" },
  { sentence: "危难当前，唯有责任。", category: "周喆直 流浪地球2" },
  {
    sentence: "希望是我们这个年代像钻石一样珍贵的东西。",
    category: "韩朵朵[女儿] 流浪地球1",
  },
  { sentence: "没有人类的文明毫无意义。", category: "马兆 流浪地球2" },
  {
    sentence:
      "起初，没有人在意这一场灾难，这不过是一场山火、一次旱灾、一个物种的灭绝、一座城市的消失，直到这场灾难和每个人息息相关。",
    category: "开场白 流浪地球2",
  },
  { sentence: "文明的命运取决于人类的选择。", category: "MOSS 流浪地球2" },
  { sentence: "我们还没转正，不享受医疗保险。", category: "赫伯特 流浪地球2" },
  { sentence: "你管这玩意叫“针”？", category: "救援队 流浪地球1" },
  {
    sentence:
      "我相信，人类的勇气可以跨越时间，跨越每一个历史、当下和未来，我相信，我们的人一定可以完成任务，无论虚实，不计存亡。",
    category: "周喆直 流浪地球2",
  },
  {
    sentence: "遨游太空其实不重要，给喜欢的人一束花很重要。",
    category: "流浪地球2",
  },
  { sentence: "天亮前的夜最难熬。", category: "流浪地球2" },
  { sentence: "没有人的文明，毫无意义。", category: "流浪地球2" },
  {
    sentence: "人类啊，把最精密的保密系统都用在了彼此毁灭之上。",
    category: "流浪地球2",
  },
  {
    sentence:
      "“吃早饭没？”“嗯？”“吃多了会吐。”“啥？”“待会儿吐了会被淘汰的。”“啊？”",
    category: "流浪地球2",
  },
];

const displaySentence = ref<string>("");
const displayCategory = ref<string>("");

function getRandomSentence(): Sentence {
  const randomIndex = Math.floor(Math.random() * oneSentences.length);
  return oneSentences[randomIndex];
}

function updateSentence(): void {
  const randomSentenceObject = getRandomSentence();
  displaySentence.value = randomSentenceObject.sentence;
  displayCategory.value = `来自：${randomSentenceObject.category}`;
}

onMounted(() => {
  const initialRandomSentence = getRandomSentence();
  displaySentence.value = initialRandomSentence.sentence;
  displayCategory.value = `来自：${initialRandomSentence.category}`;
});

import { useHead } from "#app";

useHead({
  title: "火种档案 | 首页",
  meta: [{ name: "description", content: "Page description" }],
});
</script>

<style></style>
