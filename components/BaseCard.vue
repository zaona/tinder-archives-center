<template>
  <div
    class="border border-gray-200 bg-gray-100 shadow-gray-200/50 transition-shadow hover:shadow-lg"
  >
    <slot> </slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  titleImg: {
    type: String,
    default: "",
  },
  imageSrc: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  href: {
    type: String,
    default: "",
  },
});
</script>
