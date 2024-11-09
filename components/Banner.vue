<template>
  <div
    :class="['bg-no-repeat', 'bg-cover', 'bg-center', 'w-full', 'h-[160px]']"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div
      class="h-full bg-gradient-to-b from-black/50 to-black/30 lg:bg-gradient-to-r"
    >
      <div class="mx-auto flex h-full max-w-[1200px] items-center pl-4">
        <p
          class="w-full text-center text-4xl text-white lg:text-left lg:text-5xl"
          >{{ bannerTitle }}</p
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
