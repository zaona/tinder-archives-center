<template>
  <div>
    <div class="flex items-center">
      <img class="mr-2 dark:invert" src="~/assets/icon/info.svg" alt="信息" />
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
