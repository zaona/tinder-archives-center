<template>
  <div>
    <div v-for="(category, index) in logos" :key="index" class="mt-12">
      <H1>{{ category.title }}</H1>
      <div v-if="category.source" class="mb-4 mt-2">
        <OriginTag :text="category.source" />
      </div>
      <div class="mt-2 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <div
          v-for="logo in category.logos"
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

import logos from "~/assets/config/logos.json";
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
