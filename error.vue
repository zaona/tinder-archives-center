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
          <img
            class="mb-10 w-[100px]"
            src="~/assets/img/illus/bone.svg"
            alt="A bone."
          />
          <H1>{{ error?.statusCode }}</H1>
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
