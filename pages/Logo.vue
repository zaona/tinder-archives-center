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
        <LogoList />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "火种档案 | 标志",
});
</script>

<style></style>
