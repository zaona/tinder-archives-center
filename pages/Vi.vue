<template>
  <div>
    <Banner backgroundImage="/img/pages-banner/bg-vi.png" title="VI 指南" />

    <div class="mx-auto max-w-[1200px] py-12">
      <div class="px-0 lg:px-4">
        <div class="border border-gray-200 bg-gray-50 p-6 lg:p-8">
          <p class="leading-loose text-gray-950">
            在这里可以找到 火种档案 Logo 等常用元素，希望能帮助到你。
          </p>
        </div>
      </div>

      <div class="mt-12 px-4">
        <div class="flex flex-col gap-12">
          <div>
            <TheTitle>标志元素</TheTitle>
            <div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <NormalCard
                title="symbol"
                imageSrc="/tac-logo/symbol-black.svg"
                description="图形"
              />
              <NormalCard
                title="name"
                imageSrc="/tac-logo/name-black.svg"
                description="名称"
              />
              <NormalCard
                title="type"
                imageSrc="/tac-logo/type-black.svg"
                description="英文名称"
              />
              <NormalCard
                title="eng"
                imageSrc="/tac-logo/eng-black.svg"
                description="英文全称"
              />
              <NormalCard
                title="symbol-type"
                imageSrc="/tac-logo/symbol-type-black.svg"
                description="组合方式1"
              />
              <NormalCard
                title="symbol-name-type"
                imageSrc="/tac-logo/symbol-name-type-black.svg"
                description="组合方式2"
              />
            </div>
          </div>
          <div>
            <TheTitle>颜色</TheTitle>
            <div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <PaletteCard name="primary" color="#FA3E00" />
              <PaletteCard name="primary-dark" color="#17B2FF" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "火种档案 | VI",
});
</script>
