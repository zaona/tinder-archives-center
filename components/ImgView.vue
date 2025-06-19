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
  theme: "auto",
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
