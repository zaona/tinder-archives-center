<template>
  <div>
    <div
      class="h-[620px] w-full bg-cover bg-no-repeat lg:bg-[url('~/assets/img/illus/index-bg.svg')] dark:invert"
    >
      <div class="mx-auto h-full max-w-[1200px] px-4 pt-[220px]">
        <img
          class="w-[390px] bg-white pr-10 lg:pr-0 dark:bg-black"
          src="~/assets/tac-logo/name-mix.svg"
          alt="火种档案"
        />
        <img
          class="w-[350px] bg-white pt-4 pr-10 pl-1 lg:pr-0 dark:bg-black"
          src="~/assets/tac-logo/eng-black.svg"
          alt="Tinder Archives Center"
        />
        <p
          class="w-[250px] bg-white pt-4 pl-1 font-bold text-gray-950 dark:bg-black dark:text-white"
        >
          一个「流浪地球」设计资源站
        </p>
        <div class="flex justify-end pt-10">
          <img
            class="mr-[50px] w-[140px] lg:hidden"
            src="~/assets/img/illus/little-white.svg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="mx-auto my-[80px] max-w-[1200px] px-0 lg:px-4">
      <BaseCard class="p-6 lg:p-8">
        <p class="text-2xl font-bold text-gray-950" ref="displayElement">
          {{ displaySentence }}
        </p>
        <div class="mt-4 flex items-center justify-between text-gray-950">
          <OriginTag :text="displayCategory" />
          <i
            class="mr-2 cursor-pointer"
            @click="updateSentence"
            id="generateButton"
          >
          <BaseIcon name="#icon-refresh" class="size-[20px]" />
          </i>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import sentences from "~/assets/config/sentences.json";

const displaySentence = ref("");
const displayCategory = ref("");

function getRandomSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
}

function updateSentence() {
  const randomSentenceObject = getRandomSentence();
  displaySentence.value = randomSentenceObject.sentence;
  displayCategory.value = `来自：${randomSentenceObject.category}`;
}

onMounted(() => {
  updateSentence();
});

useHead({
  titleTemplate: "火种档案 | 首页",
});
</script>

<style>
.icon {
  > svg {
    width: 1em;
    height: 1em;
    fill: currentcolor;
  }
}
</style>
