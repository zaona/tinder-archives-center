<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-logo.png" bannerTitle="标志[ING]" />

    <div class="mx-auto max-w-[1200px] py-12">
      <div class="px-0 lg:px-4">
        <div class="border border-solid bg-gray-50 p-6 lg:p-8">
          <p class="leading-loose">
            以下所有标志的修复底图都取自「流浪地球美术设定」和「流浪地球2制作手记」
          </p>
          <p class="leading-loose">
            若无特殊说明，均由 海藻酸钠 和 terminator7211 完成修复
          </p>
        </div>
      </div>

      <div class="mt-12 px-4">
        <div class="flex flex-col gap-12">
          <div v-for="(category, index) in logos" :key="index">
            <TheTitle>{{ category.title }}</TheTitle>
            <div v-if="category.source" class="mb-4 mt-2">
              <OriginTag :text="category.source" />
            </div>
            <div class="mt-2 grid grid-cols-2 gap-4 lg:grid-cols-5">
              <div
                v-for="logo in category.logos"
                :key="logo.name"
                class="flex flex-col items-center divide-y border border-solid transition-shadow hover:shadow-lg"
              >
                <p class="w-full p-4 font-bold">{{ logo.name }}</p>
                <imgView :imgSrc="logo.imgSrc" :name="logo.name" class="w-full bg-gray-50 p-4">
                  <img
                    class="h-[150px] w-full"
                    :src="logo.imgSrc"
                    alt="{{ logo.name }}"
                  />
                </imgView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logos from "assets/config/logos.json";

useHead({
  titleTemplate: "火种档案 | 标志",
});
</script>

<style></style>
