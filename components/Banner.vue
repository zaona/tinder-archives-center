<template>
  <div
    :class="['bg-no-repeat', 'bg-cover', 'bg-center', 'w-full', 'h-[160px]']"
    :style="{ backgroundImage: `url(${props.backgroundImage})` }"
  >
    <div
      class="h-full bg-linear-to-b from-slate-950/50 to-slate-950/30 lg:bg-linear-to-r"
    >
      <div class="mx-auto flex h-full max-w-[1200px] items-center px-4">
        <p
          class="w-full text-center text-4xl text-slate-50 lg:text-left lg:text-5xl"
          >{{ props.title }}</p
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface BannerProps {
  backgroundImage: string;
  title: string;
}

const props = defineProps<BannerProps>();
</script>

<style scoped></style>
