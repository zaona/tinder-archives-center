<template>
  <div>
    <div class="container">
      <div class="inner-container">
        <img
          class="image"
          src="~/assets/img/illus/browser.svg"
          alt="Your Browser is too old."
        />
        <p class="text">浏览器版本不支持</p>
        <p class="text">
          请使用最新版本的 Chrome、Firefox、Safari 或 Edge 浏览器
        </p>
        <a
          class="link"
          target="_blank"
          href="https://www.google.cn/chrome/index.html"
          >下载 Chrome</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "blank",
});
</script>

<style scoped>
body,
html {
  overflow: hidden;
  margin: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
}

.inner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  padding-left: 16px;
  padding-right: 16px;
}

.image {
  width: 220px;
  margin-bottom: 2.5rem;
}

.text {
  color: var(--color-black);
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 0;
  font-family:
    "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB",
    "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}

.link {
  margin-top: 2.5rem; /* mt-10 */
  cursor: pointer; /* cursor-pointer */
  white-space: nowrap; /* truncate */
  overflow: hidden; /* truncate */
  text-overflow: ellipsis; /* truncate */
  border-width: 2px; /* border-2 */
  border-color: var(--color-gray-950); /* border-gray-950 */
  background-color: var(--color-gray-50); /* bg-gray-50 */
  padding-left: 1.5rem; /* px-6 */
  padding-right: 1.5rem; /* px-6 */
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem; /* py-2 */
  font-weight: 500; /* font-medium */
  color: var(--color-gray-950); /* text-gray-950 */
  font-family:
    "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB",
    "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}

.link:hover {
  background-color: var(--color-gray-950); /* hover:bg-gray-950 */
  color: var(--color-gray-50); /* hover:text-gray-50 */
}
</style>
