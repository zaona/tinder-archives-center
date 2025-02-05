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
          class="order-2 flex min-h-24 w-full flex-row bg-gray-50 p-4 lg:order-first lg:w-[100px] lg:basis-1/4 lg:flex-col"
        >
          <div
            id="scroll-container"
            class="flex flex-row divide-x divide-gray-200 overflow-x-auto whitespace-nowrap lg:flex-col lg:divide-x-0 lg:divide-y"
          >
            <button
              v-for="(item, index) in items"
              :key="index"
              class="w-full px-4 py-4 text-left font-medium hover:bg-gray-100"
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
          <p v-for="(content, index) in selectedItem.contents" :key="index">
            {{ content }}
          </p>
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
