<template>
  <div class="relative">
    <BaseIcon
      name="#icon-index-bg"
      class="absolute hidden h-[620px] w-full text-gray-600 md:block"
    />
    <div class="z-10 mx-auto h-[620px] max-w-[1200px] px-4 pt-[150px]">
      <div class="flex justify-start lg:pr-0">
        <div class="w-full p-2">
          <BaseIcon
            name="#icon-tac-name-mix"
            class="aspect-[390/100] w-4/5 text-gray-950 md:w-[390px]"
          />
          <img
            class="w-4/5 pt-4 pl-1 md:w-[350px] dark:invert"
            src="~/assets/tac-logo/eng-black.svg"
            alt="Tinder Archives Center"
          />
          <p class="pt-4 pl-1 font-bold text-gray-950">
            一个「流浪地球」设计资源站
          </p>
        </div>
      </div>
      <div class="flex justify-end pt-10 md:hidden">
        <img
          class="mr-[50px] w-[140px]"
          src="~/assets/img/illus/little-white.svg"
          alt=""
        />
      </div>
    </div>

    <div class="mx-auto my-[80px] max-w-[1200px] px-0 lg:px-4">
      <BaseCard class="p-6 lg:p-8">
        <Transition
          enter-active-class="transition-all duration-300 ease-in-out"
          leave-active-class="transition-all duration-300 ease-in-out"
          enter-from-class="opacity-0 -translate-x-5"
          leave-to-class="opacity-0 translate-x-5"
          mode="out-in"
        >
          <p class="text-2xl font-bold text-gray-950" :key="displaySentence">
            {{ displaySentence }}
          </p>
        </Transition>
        <div class="mt-4 flex items-center justify-between text-gray-950">
          <OriginTag :text="displayCategory" />
          <button
            class="mr-2 cursor-pointer"
            @click="updateSentence"
            id="generateButton"
            aria-label="刷新句子"
          >
            <BaseIcon name="#icon-refresh" class="size-[20px]" />
          </button>
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
  title: "首页",
});
</script>

<style></style>
