<template>
  <div>
    <div class="flex items-center">
      <BaseIcon name="#icon-info" class="mr-2 size-[20px] text-gray-950" />
      <p class="text-sm text-gray-950">{{ props.text }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
