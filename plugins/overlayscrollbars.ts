import 'overlayscrollbars/overlayscrollbars.css';
import { useOverlayScrollbars } from 'overlayscrollbars-vue';


export default defineNuxtPlugin((nuxtApp) => {
  // 检查是否在客户端环境
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    const [initBodyOverlayScrollbars, getBodyOverlayScrollbarsInstance] = useOverlayScrollbars({
      options: {
        scrollbars: {
          theme: 'os-theme-dark',
          clickScroll: true,
        },
      },
    });
    // 对body使用OverlayScrollbars
    initBodyOverlayScrollbars(document.body);
  }
});