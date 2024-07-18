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
.fancybox__container {
  /* --fancybox-color: #dbdbdb; */
  --fancybox-color: #0d0d0d;
  --fancybox-hover-color: #fff;
  /* --fancybox-bg: rgba(24, 24, 27, 0.98); */
  --fancybox-bg: rgba(255, 255, 255, 0.9);
  --fancybox-slide-gap: 10px;
  --f-spinner-width: 50px;
  --f-spinner-height: 50px;
  --f-spinner-color-1: rgba(255, 255, 255, 0.1);
  --f-spinner-color-2: #bbb;
  --f-spinner-stroke: 3.65;
}

.fancybox__toolbar {
  --f-progress-color: var(--fancybox-color, rgba(255, 255, 255, 0.94));
  --f-button-width: 46px;
  --f-button-height: 46px;
  /* --f-button-color: var(--fancybox-color); */
  --f-button-color: #dbdbdb;
  --f-button-hover-color: var(--fancybox-hover-color);
  /* --f-button-bg: rgba(24, 24, 27, 0.65); */
  --f-button-bg: rgba(24, 24, 27, 0.9);
  /* --f-button-hover-bg: rgba(70, 70, 73, 0.65); */
  --f-button-hover-bg: rgba(70, 70, 73, 0.9);
  /* --f-button-active-bg: rgba(90, 90, 93, 0.65); */
  --f-button-active-bg: rgba(90, 90, 93, 0.9);
  --f-button-border-radius: 0;
  --f-button-svg-width: 24px;
  --f-button-svg-height: 24px;
  --f-button-svg-stroke-width: 1.5;
  --f-button-svg-filter: drop-shadow(1px 1px 1px rgba(24, 24, 27, 0.15));
  --f-button-svg-fill: none;
  --f-button-svg-disabled-opacity: 0.65;
}
</style>
