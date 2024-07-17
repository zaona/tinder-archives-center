<template>
  <div
    :class="['bg-no-repeat', 'bg-cover', 'bg-center', 'w-full', 'h-[160px]']"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="h-full bg-gradient-to-r from-black/50">
      <div class="mx-auto flex h-full max-w-[1200px] items-center pl-4">
        <p class="text-5xl text-white">{{ bannerTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  bgImage: {
    type: String,
    required: true,
  },
  bannerTitle: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
