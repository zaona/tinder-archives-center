<template>
  <div
    class="items-center border border-gray-200 bg-gray-50 p-4 shadow-gray-200/50 transition-shadow hover:shadow-lg"
  >
    <div class="flex flex-row justify-between">
      <p class="font-bold text-gray-950">{{ name }}</p>
      <span
        class="h-[24px] w-[24px]"
        :style="{ backgroundColor: color }"
      ></span>
    </div>
    <p class="mt-8 text-gray-500">{{ color }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  color: string;
}>();
</script>
