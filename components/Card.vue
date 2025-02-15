<template>
  <div v-if="href" class="group relative">
    <a target="_blank" :href="href">
      <CardContent
        :title="title"
        :description="description"
        :imageSrc="imageSrc"
        :titleImg="titleImg"
      />
      <img
        class="absolute top-[18px] right-[18px] opacity-0 transition-opacity group-hover:opacity-100 dark:invert"
        src="~/assets/icon/arrow.svg"
        alt="前往"
      />
    </a>
  </div>
  <div v-else class="group relative">
    <CardContent
      :title="title"
      :description="description"
      :imageSrc="imageSrc"
      :titleImg="titleImg"
    />
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
  href: {
    type: String,
    default: "",
  },
});
</script>
