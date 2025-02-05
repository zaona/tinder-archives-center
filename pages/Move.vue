<template>
  <div>
    <div class="container">
      <div class="inner-container">
        <img
          class="image"
          src="~/assets/img/illus/move.svg"
          alt="Your Website is too Old."
        />
        <p class="text">“地球联合资源站”已更名为“火种档案”</p>
        <p class="text">请使用新网址：tac.zaona.top 访问</p>
        <a class="link" target="_blank" href="https://tac.zaona.top"
          >点击前往</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "blank",
});

useHead({
  titleTemplate: "火种档案 | 迁移",
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
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei",
    sans-serif;
}

.link {
  margin-top: 40px;
  cursor: pointer;
  border-width: 2px;
  border-color: black;
  background-color: white;
  border-style: solid;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  line-height: 24px;
  color: black;
  text-decoration: none;
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei",
    sans-serif;
}
</style>
