<template>
  <NuxtLoadingIndicator color="#FA3E00" :throttle="0" />
  <!-- :throttle="0" -->
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body::-webkit-scrollbar {
  width: 8px;
  /* 设置滚动条宽度 */
}

/* 滚动条滑块 */
body::-webkit-scrollbar-thumb {
  background-color: #0000007a;
  /* 设置滑块的颜色 */
}
</style>
