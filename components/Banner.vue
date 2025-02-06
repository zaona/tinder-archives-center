<template>
  <div
    :class="['bg-no-repeat', 'bg-cover', 'bg-center', 'w-full', 'h-[160px]']"
    :style="{ backgroundImage: `url(${props.bgImage})` }"
  >
    <div
      class="h-full bg-linear-to-b from-slate-950/50 to-slate-950/30 lg:bg-linear-to-r"
    >
      <div class="mx-auto flex h-full max-w-[1200px] items-center px-4">
        <p
          class="w-full text-center text-4xl text-slate-50 lg:text-left lg:text-5xl"
          >{{ props.bannerTitle }}</p
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
