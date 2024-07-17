<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div>
    <div class="mx-auto flex h-screen w-screen items-center justify-center">
      <div class="mx-auto max-w-[1200px] px-4">
        <div class="flex flex-col items-center">
          <img class="mb-10 w-[100px]" src="~/assets/img/illus/bone.svg" />
          <p class="text-5xl font-bold leading-loose">
            {{ error?.statusCode }}
          </p>
          <p class="leading-loose">这里空空如也</p>
          <p class="leading-loose">只有一根断裂后愈合的股骨</p>
          <NuxtLink
            class="mt-10 cursor-pointer truncate border-2 border-black bg-white px-6 py-2 font-medium text-black"
            to="/"
            >返回首页</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
