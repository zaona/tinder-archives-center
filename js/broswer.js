(function checkBrowserVersion() {
    // 定义所需的浏览器类型和最低版本号
    const requiredBrowser = "Safari";
    const minVersion = "13.0"; // 替换为实际所需的最低Safari版本
  
    // 获取当前浏览器的UserAgent字符串
    const userAgent = navigator.userAgent;
  
    // 使用正则表达式匹配浏览器类型和版本号
    const browserMatch = new RegExp(`${requiredBrowser}\\/(\\d+\\.\\d+)`).exec(userAgent);
  
    if (browserMatch) {
      const currentVersion = browserMatch[1];
  
      // 检查当前浏览器版本是否符合要求
      if (compareVersions(currentVersion, minVersion) < 0) {
        // 不符合要求，执行页面跳转
        window.location.href = "/src/page/broswer.html"; // 替换为实际的提示或升级指引网页地址
      }
    } else {
      // 当前浏览器不是指定的浏览器类型
      window.location.href = "/src/page/broswer.html"; // 替换为实际的提示或升级指引网页地址
    }
  })();
  
  // 辅助函数：比较两个版本号
  function compareVersions(versionA, versionB) {
    const partsA = versionA.split(".").map(Number);
    const partsB = versionB.split(".").map(Number);
  
    for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
      const a = partsA[i] || 0;
      const b = partsB[i] || 0;
  
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
    }
  
    return 0; // 相等
  }