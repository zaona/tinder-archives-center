export default defineNuxtPlugin((nuxtApp) => {
  // 检查是否在客户端环境
  if (typeof window !== "undefined" && typeof navigator !== "undefined") {
    const { pathname } = window.location;

    // 检查是否为旧版Safari浏览器
    const isOldSafari = isSafariVersionLessThan(13);

    // 根据条件决定是否重定向
    if (pathname !== "/browser" && isOldSafari) {
      window.location.href = "/browser";
    }
  }
});

// 封装Safari版本检测函数
function isSafariVersionLessThan(version: number): boolean | null {
  const safariVersionMatch = /Safari\/(\d+)/.exec(navigator.userAgent);
  if (!safariVersionMatch) {
    return null; // 返回null时明确表示未匹配到Safari浏览器，这是一种合理的处理方式
  }
  // 使用parseInt确保比较的是数字类型，而不是字符串类型
  return parseInt(safariVersionMatch[1]) < version;
}
