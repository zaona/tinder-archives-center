export const useThemeMode = () => {
  // 初始化主题状态
  const initializeTheme = () => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  };

  const setColorMode = (mode: string) => {
    if (mode === "system") {
      localStorage.removeItem("theme");
      document.documentElement.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches,
      );
    } else {
      localStorage.theme = mode;
      document.documentElement.classList.toggle("dark", mode === "dark");
    }
  };

  return {
    initializeTheme,
    setColorMode,
  };
};
