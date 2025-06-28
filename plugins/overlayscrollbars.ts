import "overlayscrollbars/overlayscrollbars.css";
import { useOverlayScrollbars } from "overlayscrollbars-vue";
import { ref, watch } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  // 检查是否在客户端环境
  if (typeof window !== "undefined" && typeof navigator !== "undefined") {
    const colorMode = useColorMode();
    
    const options = ref({
      scrollbars: {
        theme: colorMode.value === 'dark' ? "os-theme-light" : "os-theme-dark",
      },
    });

    const [initBodyOverlayScrollbars] = useOverlayScrollbars({ options });
    initBodyOverlayScrollbars(document.body);

    // 监听主题变化并更新滚动条样式
    const stopWatch = watch(
      () => colorMode.value,
      (newTheme) => {
        options.value = {
          scrollbars: {
            theme: newTheme === 'dark' ? "os-theme-light" : "os-theme-dark",
          },
        };
      }
    );

    // 在插件卸载时清理资源
    return {
      provide: {},
      hooks: {
        beforeUnmount() {
          stopWatch();
        }
      }
    };
  }
});
