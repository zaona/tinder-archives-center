<template>
  <div class="flex h-full flex-col items-center divide-y divide-gray-200">
    <div v-if="titleImg" class="h-[56px] w-full truncate p-[20px]">
      <img class="h-full dark:invert" :src="titleImg" :alt="titleImg" />
    </div>
    <p
      v-if="title"
      class="w-full shrink-0 truncate p-4 leading-[24px] font-bold text-gray-950"
      >{{ title }}</p
    >
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
