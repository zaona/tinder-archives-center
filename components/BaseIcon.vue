<template>
  <svg>
    <use :href="name"></use>
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
