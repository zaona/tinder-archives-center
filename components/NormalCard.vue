<template>
  <BaseCard>
    <div v-if="href">
      <a target="_blank" :href="href" class="group relative">
        <NormalCardContent
          :titleImg="titleImg"
          :title="title"
          :imageSrc="imageSrc"
          :description="description"
        />
        <img
          class="absolute top-[18px] right-[18px] opacity-0 transition-opacity group-hover:opacity-100 dark:invert"
          src="~/assets/icon/arrow.svg"
          alt="前往"
        />
      </a>
    </div>
    <div v-else>
      <NormalCardContent
        :titleImg="titleImg"
        :title="title"
        :imageSrc="imageSrc"
        :description="description"
      />
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
