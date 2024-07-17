<template>
  <div>
    <Banner bgImage="/img/pages-banner/bg-logo.png" bannerTitle="标志[ING]" />

    <div class="mx-auto mb-12 max-w-[1200px] px-4 py-12">
      <div class="border border-solid bg-gray-50 p-6 lg:p-8">
        <p class="leading-loose">
          以下所有标志的修复底图都取自「流浪地球美术设定」和「流浪地球2制作手记」
        </p>
        <p class="leading-loose">
          若无特殊说明，均由 海藻酸钠 和 terminator7211 完成修复
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from "#app";

useHead({
  title: "火种档案 | 标志",
  meta: [{ name: "description", content: "Page description" }],
});
</script>

<style></style>
