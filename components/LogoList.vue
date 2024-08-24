<template>
  <div>
    <div v-for="(group, index) in config" :key="index" class="mt-12">
      <H1>{{ group.title }}</H1>
      <div v-if="group.source" class="mb-4 mt-2">
        <OriginTag :text="group.source" />
      </div>
      <div class="mt-2 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <div
          v-for="logo in group.logos"
          :key="logo.name"
          class="flex flex-col items-center divide-y border border-solid transition-shadow hover:shadow-lg"
        >
          <p class="w-full p-4 font-bold">{{ logo.name }}</p>
          <a
            :data-fancybox="true"
            :data-src="logo.imgSrc"
            :data-caption="logo.name"
            :data-download-src="logo.imgSrc"
            :data-download-filename="logo.name"
            class="w-full bg-gray-50 p-4"
          >
            <img
              class="h-[150px] w-full"
              :src="logo.imgSrc"
              alt="{{ logo.name }}"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { zh_CN } from "@fancyapps/ui/dist/fancybox/l10n/zh_CN.esm.js";

Fancybox.bind("[data-fancybox]", {
  groupAttr: false,
  hideScrollbar: false,
  l10n: zh_CN,
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: [],
      right: ["slideshow", "download", "thumbs", "close"],
    },
  },
});

import { ref } from "vue";

const config = ref([
  {
    title: "地球联合政府",
    source: "",
    logos: [
      { name: "UEG", imgSrc: "/img/logo/地球联合政府-UEG.svg" },
      { name: "图形", imgSrc: "/img/logo/地球联合政府-图形.svg" },
      { name: "文字", imgSrc: "/img/logo/地球联合政府-文字.svg" },
      { name: "徽标", imgSrc: "/img/illus/bone.svg" },
      { name: "北极基地", imgSrc: "/img/logo/地球联合政府-北极基地.svg" },
      { name: "加蓬联合实验基地", imgSrc: "/img/illus/bone.svg" },
      { name: "难民署", imgSrc: "/img/illus/bone.svg" },
      { name: "粮食计划署", imgSrc: "/img/illus/bone.svg" },
      { name: "飞行控制中心", imgSrc: "/img/illus/bone.svg" },
    ],
  },
  {
    title: "550系列",
    source: "",
    logos: [
      { name: "550A", imgSrc: "/img/logo/550系列-550A.svg" },
      { name: "550C", imgSrc: "/img/logo/550系列-550C.svg" },
      { name: "550W", imgSrc: "/img/logo/550系列-550W.svg" },
    ],
  },
  {
    title: "逐月计划",
    source: "",
    logos: [
      { name: "图形+文字", imgSrc: "/img/logo/逐月计划-图形-文字.svg" },
      { name: "徽标", imgSrc: "/img/logo/逐月计划-徽标.svg" },
    ],
  },
  {
    title: "移山计划",
    source: "",
    logos: [{ name: "徽标", imgSrc: "/img/logo/移山计划-徽标.svg" }],
  },
  {
    title: "方舟计划",
    source: "",
    logos: [{ name: "徽标", imgSrc: "/img/logo/方舟计划-徽标.svg" }],
  },
  {
    title: "领航员计划",
    source: "",
    logos: [
      { name: "图形+文字", imgSrc: "/img/illus/bone.svg" },
      { name: "徽标", imgSrc: "/img/logo/领航员计划-徽标.svg" },
    ],
  },
  {
    title: "北京航天中心",
    source: "",
    logos: [{ name: "图形+文字", imgSrc: "/img/illus/bone.svg" }],
  },
  {
    title: "太空电梯",
    source: "",
    logos: [{ name: "图形+文字", imgSrc: "/img/logo/太空电梯-图形-文字.svg" }],
  },
  {
    title: "门框机器人",
    source: "",
    logos: [{ name: "图形+文字", imgSrc: "/img/illus/bone.svg" }],
  },
  {
    title: "2044 上海",
    source: "",
    logos: [
      { name: "图形+文字", imgSrc: "/img/logo/2044上海-图形-文字.svg" },
      { name: "海报", imgSrc: "/img/logo/2044上海-海报.svg" },
    ],
  },
  {
    title: "中国应急预案执行组",
    source: "",
    logos: [{ name: "图形+文字", imgSrc: "/img/illus/bone.svg" }],
  },
  {
    title: "中国科学院数字生命研究所",
    source: "",
    logos: [{ name: "图形+文字", imgSrc: "/img/illus/bone.svg" }],
  },
  {
    title: "中国互联网中心北京基地",
    source: "",
    logos: [{ name: "图形+文字", imgSrc: "/img/illus/bone.svg" }],
  },
  {
    title: "智能量子计算机重点实验室",
    source: "",
    logos: [{ name: "图形+文字", imgSrc: "/img/illus/bone.svg" }],
  },
]);
</script>

<style>
.fancybox__container {
  /* --fancybox-color: #dbdbdb; */
  --fancybox-color: #0d0d0d;
  --fancybox-hover-color: #fff;
  /* --fancybox-bg: rgba(24, 24, 27, 0.98); */
  --fancybox-bg: rgba(255, 255, 255, 0.9);
  --fancybox-slide-gap: 10px;
  --f-spinner-width: 50px;
  --f-spinner-height: 50px;
  --f-spinner-color-1: rgba(255, 255, 255, 0.1);
  --f-spinner-color-2: #bbb;
  --f-spinner-stroke: 3.65;
}

.fancybox__toolbar {
  --f-progress-color: var(--fancybox-color, rgba(255, 255, 255, 0.94));
  --f-button-width: 46px;
  --f-button-height: 46px;
  /* --f-button-color: var(--fancybox-color); */
  --f-button-color: #dbdbdb;
  --f-button-hover-color: var(--fancybox-hover-color);
  /* --f-button-bg: rgba(24, 24, 27, 0.65); */
  --f-button-bg: rgba(24, 24, 27, 0.9);
  /* --f-button-hover-bg: rgba(70, 70, 73, 0.65); */
  --f-button-hover-bg: rgba(70, 70, 73, 0.9);
  /* --f-button-active-bg: rgba(90, 90, 93, 0.65); */
  --f-button-active-bg: rgba(90, 90, 93, 0.9);
  --f-button-border-radius: 0;
  --f-button-svg-width: 24px;
  --f-button-svg-height: 24px;
  --f-button-svg-stroke-width: 1.5;
  --f-button-svg-filter: drop-shadow(1px 1px 1px rgba(24, 24, 27, 0.15));
  --f-button-svg-fill: none;
  --f-button-svg-disabled-opacity: 0.65;
}

.is-compact .fancybox__footer {
  /* background: rgba(24, 24, 27, .5); */
  background: rgba(191, 191, 191, 0.5);
}
</style>
