<template>
  <Header class="fixed top-0 z-10 w-full" />
  <div class="h-dvh pt-16 lg:pt-20">
    <div class="h-full">
      <div
        class="flex h-full flex-col justify-between overflow-hidden lg:flex-row"
      >
        <div
          data-overlayscrollbars-initialize
          ref="itemList"
          class="order-2 flex min-h-24 w-full flex-row bg-gray-100 p-4 lg:order-first lg:w-[100px] lg:basis-1/4 lg:flex-col"
        >
          <div
            id="scroll-container"
            class="flex flex-row divide-x divide-gray-200 overflow-x-auto whitespace-nowrap lg:flex-col lg:divide-x-0 lg:divide-y"
          >
            <button
              v-for="(item, index) in items"
              :key="index"
              class="w-full cursor-pointer px-4 py-4 text-left font-medium text-gray-950 hover:bg-gray-200"
              @click="selectItem(index)"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
        <div
          data-overlayscrollbars-initialize
          ref="itemDescription"
          class="flex w-full flex-col gap-[12px] p-4 lg:basis-3/4"
        >
          <TheTitle class="mb-4">{{ selectedItem.name }}</TheTitle>
          <div class="flex flex-col gap-2">
            <div v-for="(content, index) in selectedItem.contents" :key="index">
              <div class="flex items-center gap-2">
                <span
                  class="px-2 py-0.5 text-sm font-medium"
                  :class="{
                    'border border-blue-700 text-blue-700':
                      content.type === 'feature',
                    'border border-green-700 text-green-700':
                      content.type === 'optimize',
                    'border border-red-700 text-red-700':
                      content.type === 'fix',
                  }"
                >
                  {{ content.type }}
                </span>
                <p class="leading-loose font-medium text-gray-950">
                  {{ content.title }}
                </p>
              </div>
              <p class="text-sm leading-loose text-gray-600">
                {{ content.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "blank",
});

useHead({
  titleTemplate: "火种档案 | 文档",
});

import { ref, onMounted } from "vue";
import items from "~/assets/config/docs.json";
import { useOverlayScrollbars } from "overlayscrollbars-vue";

// 滚动条
const itemList = ref();
const [initItemListOverlayScrollbars] = useOverlayScrollbars({
  options: {
    scrollbars: {
      theme: "os-theme-dark",
    },
  },
});
const itemDescription = ref();
const [initItemDescriptionOverlayScrollbars] = useOverlayScrollbars({
  options: {
    scrollbars: {
      theme: "os-theme-dark",
    },
  },
});

onMounted(() => {
  initItemListOverlayScrollbars(itemList.value);
  initItemDescriptionOverlayScrollbars(itemDescription.value);

  const container = document.getElementById("scroll-container");
  container?.addEventListener("wheel", function (event) {
    if (event.deltaY !== 0) {
      if (!window.matchMedia("(min-width: 1024px)").matches) {
        container.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    }
  });
});

// 当前选中的项目
const selectedItem = ref(items[0]);

// 更新描述的函数
function selectItem(index: number) {
  selectedItem.value = items[index];
}

// 初始化显示第一个项目
selectItem(0);
</script>

<style>
#scroll-container {
  scrollbar-width: none;
}

#scroll-container::-webkit-scrollbar {
  display: none;
}
</style>
