<template>
  <div>
    <div class="flex items-center">
      <img class="mr-2" src="~/assets/icon/info.svg" />
      <p class="text-sm">{{ text }}</p>
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
