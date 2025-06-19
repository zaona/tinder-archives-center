<template>
  <BaseCard class="group relative">
    <div>
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
          <img
            class="h-[100px] w-full dark:invert"
            :src="imageSrc"
            :alt="title"
          />
        </imgView>
        <p v-if="description" class="w-full p-4 text-gray-950">{{
          description
        }}</p>
      </div>
      <a target="_blank" :href="href">
        <div v-if="href" class="absolute top-0 left-0 h-full w-full">
          <BaseIcon
            name="#icon-arrow"
            class="absolute top-[18px] right-[18px] size-[20px] text-gray-950 opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
      </a>
    </div>
  </BaseCard>
</template>

<script lang="ts" setup>
defineProps({
  href: {
    type: String,
    default: "",
  },
  titleImg: {
    type: String,
    default: "",
  },
  title: {
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
