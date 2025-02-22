<template>
  <div class="flex h-full flex-col items-center divide-y divide-gray-200">
    <div v-if="titleImg" class="w-full truncate p-[20px] h-[56px]">
      <img class="h-full dark:invert" :src="titleImg" :alt="titleImg" />
    </div>
    <p v-if="title" class="w-full truncate p-4 font-bold text-gray-950 leading-[24px] shrink-0">{{ title }}</p>
    <imgView
      v-if="imageSrc"
      :imageSrc="imageSrc"
      :name="title"
      class="h-full w-full p-6"
    >
      <img class="h-[100px] w-full dark:invert" :src="imageSrc" :alt="title" />
    </imgView>
    <p v-if="description" class="w-full p-4 text-gray-950">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  titleImg: {
    type: String,
    default: "",
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