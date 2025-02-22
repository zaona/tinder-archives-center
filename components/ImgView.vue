<script setup>
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { zh_CN } from "@fancyapps/ui/dist/fancybox/l10n/zh_CN.esm.js";

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

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
</script>

<template>
  <a
    :data-fancybox="true"
    :data-src="props.imageSrc"
    :data-caption="props.name"
    :data-download-src="props.imageSrc"
    :data-download-filename="props.name"
  >
    <slot />
  </a>
</template>

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

@media (prefers-color-scheme: dark) {
  .fancybox__container {
    /* --fancybox-color: #dbdbdb; */
    --fancybox-bg: rgba(128, 128, 128, 0.8);
  }
  /* 
  .fancybox__toolbar {
    --f-button-color: var(--fancybox-color);
    --f-button-bg: rgba(24, 24, 27, 0.65);
    --f-button-hover-bg: rgba(70, 70, 73, 0.65);
    --f-button-active-bg: rgba(90, 90, 93, 0.65);
  }

  .is-compact .fancybox__footer {
    background: rgba(24, 24, 27, 0.5);
  } */
}
</style>
