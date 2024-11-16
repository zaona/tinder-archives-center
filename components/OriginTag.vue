<template>
  <div>
    <div class="flex items-center">
      <img class="mr-2" src="~/assets/icon/info.svg" alt="信息" />
      <p class="text-sm">{{ props.text }}</p>
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
