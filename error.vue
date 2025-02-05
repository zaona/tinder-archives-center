<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div>
    <div
      class="mx-auto flex h-screen w-screen items-center justify-center bg-white"
    >
      <div class="mx-auto max-w-[1200px] px-4">
        <div class="flex flex-col items-center">
          <img
            class="mb-10 w-[100px] dark:invert"
            src="~/assets/img/illus/bone.svg"
            alt="A bone."
          />
          <TheTitle>{{ error?.statusCode }}</TheTitle>
          <NuxtLink
            class="mt-10 cursor-pointer truncate border-2 border-gray-950 bg-gray-50 px-6 py-2 font-medium text-gray-950"
            to="/"
            >返回首页</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
