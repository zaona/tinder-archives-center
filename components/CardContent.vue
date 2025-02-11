<template>
  <div
    class="flex h-full flex-col items-center divide-y divide-gray-200 border border-gray-200 bg-gray-50 shadow-gray-200/50 transition-shadow hover:shadow-lg"
  >
    <p class="w-full truncate p-4 font-bold text-gray-950">{{ title }}</p>
    <imgView
      v-if="imageSrc"
      :imgSrc="imageSrc"
      :name="title"
      class="h-full w-full p-6"
    >
      <img class="h-[100px] w-full dark:invert" :src="imageSrc" :alt="title" />
    </imgView>
    <p v-if="description" class="w-full p-4 text-gray-950">{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<style></style>
