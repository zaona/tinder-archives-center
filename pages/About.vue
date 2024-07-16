<template>
  <div class="bg-no-repeat bg-cover bg-center bg-[url('~/assets/img/pages-banner/bg-about.png')] w-full h-[160px] mb-12">
        <div class="bg-gradient-to-r from-black/50 h-full">
            <div class="h-full max-w-[1200px] mx-auto pl-4">
                <p class="text-[48px] pt-[56px] text-white leading-[48px]">关于</p>
            </div>
        </div>
    </div>
    <div class="mx-auto max-w-[1200px] px-4 mb-12">
        <p class="text-[36px] mb-[12px]">关于本站</p>
        <p class="text-[16px] mb-[12px]">在流浪地球中，“火种计划”是指一旦“流浪地球计划”失败，“领航员号”空间站将携带着受精卵和数据库飞往四光年外的半人马座。</p>
        <p class="text-[16px] mb-[12px]">“火种档案”目前整合了流浪地球电影中的颜色，字体，标志等内容，未来将会持续更新，</p>
        <p class="text-[16px] mb-[48px]">希望能给各个流浪地球二创作者带来便利。</p>
        <p class="text-[36px] mb-[12px]">鸣谢</p>
        <p class="text-[16px] mb-[12px]">衷心感谢电影流浪地球，衷心感谢为本网站提供部分设计资源与改进建议的小破球爱好者们。</p>

        <div class="grid lg:grid-cols-4 grid-cols-2 gap-[16px] mt-[16px]">
            <a target="_blank" class="" href="https://space.bilibili.com/518916820">
                <div class="relative transition-shadow hover:shadow-lg h-full">
                    <div class="flex flex-col items-center border-solid border divide-y h-full">
                        <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">海藻酸钠</p>
                        <p class="text-[16px] px-[16px] py-[16px] w-full">本站设计+前端开发</p>
                    </div>
                    <div
                        class="absolute w-full h-full top-0 right-0 opacity-0 hover:opacity-100 transition-opacity divide-y-0">
                        <img class="absolute top-[18px] right-[18px]" src="~/assets/icon/arrow.svg">
                    </div>
                </div>
            </a>
            <a target="_blank" class="" href="https://space.bilibili.com/248314816">
                <div class="relative transition-shadow hover:shadow-lg">
                    <div class="flex flex-col items-center border-solid border divide-y h-full">
                        <div class="flex items-center justify-between px-[16px] py-[16px] w-full h-full">
                            <img class="h-[16px] my-[4px]" src="~/assets/img/about/terminator7211.svg">
                        </div>
                        <p class="text-[16px] px-[16px] py-[16px] w-full">本站Logo作者，修复了很多复杂的流浪地球标志</p>
                    </div>
                    <div
                        class="absolute w-full h-full top-0 right-0 opacity-0 hover:opacity-100 transition-opacity divide-y-0">
                        <img class="absolute top-[18px] right-[18px]" src="~/assets/icon/arrow.svg">
                    </div>
                </div>
            </a>
            <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
                <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">吕小技同学</p>
                <p class="text-[16px] px-[16px] py-[16px] w-full">提供了非常多的高质量流浪地球海报以及台词</p>
            </div>
            <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
                <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">梅花糕糕</p>
                <p class="text-[16px] px-[16px] py-[16px] w-full">为本站的“小苔藓计划”风格海报提供了手写字支持</p>
            </div>
            <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
                <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">小鱼yuzifu</p>
                <p class="text-[16px] px-[16px] py-[16px] w-full">将作者从 js 的水深火热中解脱出来</p>
            </div>
            <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
                <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">刘lyxAndy</p>
                <p class="text-[16px] px-[16px] py-[16px] w-full">帮助改进了网站的部分 js 代码</p>
            </div>
            <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
                <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">fish</p>
                <p class="text-[16px] px-[16px] py-[16px] w-full">帮助作者找到了很多有用的开发资源</p>
            </div>
            <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
                <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">小宏XeLa</p>
                <p class="text-[16px] px-[16px] py-[16px] w-full">帮助作者找到了很多有用的开发资源</p>
            </div>
            <div class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
                <p class="text-[16px] font-bold px-[16px] py-[16px] w-full">叶梦昀</p>
                <p class="text-[16px] px-[16px] py-[16px] w-full">提了非常多非常多我完不成的建议...</p>
            </div>
        </div>
        <img class="w-[300px] mx-auto mt-[48px]" src="~/assets/img/illus/thanks.svg">
    </div>
</template>

<script lang="ts" setup>
import { useHead } from '#app'

useHead({
  title: '火种档案 | 关于',
  meta: [
    { name: 'description', content: 'Page description' }
  ]
})
</script>

<style>

</style>