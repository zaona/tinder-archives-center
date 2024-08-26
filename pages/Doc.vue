<template>
  <div class="h-dvh pt-16 lg:pt-20">
    <Header class="fixed top-0 z-10 w-full" />
    <div class="h-full">
      <div class="flex lg:flex-row flex-col overflow-hidden h-full justify-between">
        <div class="lg:order-first order-2 lg:basis-1/4 p-4 bg-gray-50 lg:w-[100px] w-full flex lg:flex-col flex-row">
          <div class="flex lg:flex-col flex-row lg:divide-y lg:divide-x-0 divide-x overflow-auto" id="itemList">
            <button v-for="(item, index) in items" :key="index"
              class="text-left w-full px-4 hover:bg-gray-100 font-medium py-4"
              @click="updateItemDescription(index)">
              {{ item.name }}
            </button>
          </div>
        </div>
        <div id="itemDescription" class="lg:basis-3/4 w-full flex flex-col overflow-auto p-4 gap-[12px]">
          <H1>{{ selectedItem.name }}</H1>
          <p>{{ selectedItem.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "blank",
});

import { ref } from 'vue';

// 定义列表项数据
const items = [
  {
    name: "20240826",
    bio: "✨ 更新日志",
  },
  {
    name: "20240825",
    bio: "✨ 代码质量提升",
  },
];

// 当前选中的项目
const selectedItem = ref(items[0]);

// 更新描述的函数
function updateItemDescription(index: number) {
  selectedItem.value = items[index];
}

// 初始化显示第一个项目
updateItemDescription(0);
</script>

<style></style>