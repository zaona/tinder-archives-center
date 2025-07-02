<template>
  <div>
    <Banner backgroundImage="/img/pages-banner/bg-color.png" title="颜色" />

    <div class="mx-auto max-w-[1200px] px-4 py-12">
      <TheTitle>流浪地球</TheTitle>
      <div class="mt-2">
        <OriginTag text="来自：哔哩哔哩 · @长期洗涤Longwashing" />
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <PaletteCard name="红-1" color="#EC2021" />
        <PaletteCard name="红-2" color="#FA3E00" />
      </div>

      <div class="mt-12">
        <TheTitle>地球联合政府</TheTitle>
      </div>
      <div class="mt-2">
        <OriginTag text="来自：UET设计组校准" />
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <PaletteCard name="浅蓝" color="#267F9D" />
      </div>

      <div class="mt-12">
        <TheTitle>北京航天中心</TheTitle>
      </div>
      <div class="mt-2">
        <OriginTag text="来自：机核 · 流浪地球美术设定" />
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <PaletteCard name="深蓝" color="#22408F" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "颜色",
});
</script>

<style></style>
