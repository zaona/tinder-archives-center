import "overlayscrollbars/overlayscrollbars.css";
import { useOverlayScrollbars } from "overlayscrollbars-vue";
import { ref } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  // 检查是否在客户端环境
  if (typeof window !== "undefined" && typeof navigator !== "undefined") {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const getScrollbarOptions = (isDark: boolean) => {
      return {
        scrollbars: {
          theme: isDark ? "os-theme-light" : "os-theme-dark",
        },
      };
    };

    const options = ref(getScrollbarOptions(mediaQuery.matches));
    const [initBodyOverlayScrollbars] = useOverlayScrollbars({ options });
    initBodyOverlayScrollbars(document.body);

    const handleThemeChange = () => {
      options.value = getScrollbarOptions(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }
});