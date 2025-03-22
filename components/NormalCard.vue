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
        <BaseIcon
          name="#icon-arrow"
          class="absolute top-[18px] right-[18px] size-[20px] text-gray-950 opacity-0 transition-opacity group-hover:opacity-100"
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
