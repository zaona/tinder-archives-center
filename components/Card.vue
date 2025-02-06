<template>
  <div v-if="href" class="group relative">
    <a target="_blank" :href="href">
      <div
        class="flex h-full flex-col items-center divide-y divide-gray-200 border border-solid border-gray-200 bg-gray-50 transition-shadow hover:shadow-lg"
      >
        <p class="w-full p-4 font-bold text-gray-950">{{ title }}</p>
        <imgView
          v-if="imageSrc"
          :imgSrc="imageSrc"
          :name="title"
          class="h-full w-full p-4"
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
      <img
        class="absolute top-[18px] right-[18px] opacity-0 transition-opacity group-hover:opacity-100 dark:invert"
        src="~/assets/icon/arrow.svg"
        alt="前往"
      />
    </a>
  </div>
  <div v-else class="group relative">
    <div
      class="flex h-full flex-col items-center divide-y divide-gray-200 border border-solid border-gray-200 bg-gray-50 transition-shadow hover:shadow-lg"
    >
      <p class="w-full p-4 font-bold text-gray-950">{{ title }}</p>
      <imgView
        v-if="imageSrc"
        :imgSrc="imageSrc"
        :name="title"
        class="h-full w-full p-4"
      >
        <img
          class="h-[100px] w-full dark:invert"
          :src="imageSrc"
          :alt="title"
        />
      </imgView>
      <p v-if="description" class="w-full p-4 text-gray-700">{{
        description
      }}</p>
    </div>
  </div>
</template>

<script setup>
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
  href: {
    type: String,
    default: "",
  },
});
</script>