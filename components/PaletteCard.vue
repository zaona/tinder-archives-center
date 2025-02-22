<template>
  <BaseCard>
    <div class="p-4">
      <div class="flex flex-row justify-between">
        <p class="font-bold text-gray-950">{{ name }}</p>
        <span
          class="h-[24px] w-[24px]"
          :style="{ backgroundColor: color }"
        ></span>
      </div>
      <p class="mt-8 text-gray-500">{{ color }}</p>
    </div>
  </BaseCard>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  color: string;
}>();
</script>