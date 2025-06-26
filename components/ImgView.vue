<script setup>
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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
  zoomEffect: false,
  theme: "dark",
  groupAttr: false,
  hideScrollbar: false,
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
.f-panzoom__content {
  filter: invert(100%);
}
</style>
