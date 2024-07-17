<template>
  <div>
    <div v-for="(group, index) in config" :key="index" class="mt-12">
      <p class="text-4xl leading-loose">{{ group.title }}</p>
      <div v-if="group.source" class="mt-2 mb-4">
        <OriginTag :text="group.source" />
      </div>
      <div class="grid lg:grid-cols-5 grid-cols-2 gap-4 mt-2">
        <div v-for="logo in group.logos" :key="logo.name"
          class="flex flex-col items-center border-solid border divide-y transition-shadow hover:shadow-lg">
          <p class="font-bold p-4 w-full">{{ logo.name }}</p>
          <img class="w-full h-[150px] p-4 bg-gray-50" :src="logo.imgSrc" :alt="logo.name">
          <!-- <a :data-fancybox="true" :data-src="logo.imgSrc" :data-caption="logo.name" :data-download-src="logo.imgSrc" :data-download-filename="logo.name" class="w-full p-4 bg-gray-50">
            <img class="w-full h-[150px]" :src="logo.imgSrc" alt="{{ logo.name }}">
          </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const config = ref([
  {
    title: '地球联合政府',
    source: '',
    logos: [
      { name: 'UEG', imgSrc: '/img/logo/地球联合政府-UEG.svg' },
      { name: '图形', imgSrc: '/img/logo/地球联合政府-图形.svg' },
      { name: '文字', imgSrc: '/img/logo/地球联合政府-文字.svg' },
      { name: '徽标', imgSrc: '/img/illus/bone.svg' },
      { name: '北极基地', imgSrc: '/img/logo/地球联合政府-北极基地.svg' },
      { name: '加蓬联合实验基地', imgSrc: '/img/illus/bone.svg' },
      { name: '难民署', imgSrc: '/img/illus/bone.svg' },
      { name: '粮食计划署', imgSrc: '/img/illus/bone.svg' },
      { name: '飞行控制中心', imgSrc: '/img/illus/bone.svg' },
    ],
  },
  {
    title: '550系列',
    source: '',
    logos: [
      { name: '550A', imgSrc: '/img/logo/550系列-550A.svg' },
      { name: '550C', imgSrc: '/img/logo/550系列-550C.svg' },
      { name: '550W', imgSrc: '/img/logo/550系列-550W.svg' },
    ],
  },
  {
    title: '逐月计划',
    source: '',
    logos: [
      { name: '图形+文字', imgSrc: '/img/logo/逐月计划-图形-文字.svg' },
      { name: '徽标', imgSrc: '/img/logo/逐月计划-徽标.svg' },
    ],
  },
  {
    title: '移山计划',
    source: '',
    logos: [
      { name: '徽标', imgSrc: '/img/logo/移山计划-徽标.svg' },
    ],
  },
  {
    title: '方舟计划',
    source: '',
    logos: [
      { name: '徽标', imgSrc: '/img/logo/方舟计划-徽标.svg' },
    ],
  },
  {
    title: '领航员计划',
    source: '',
    logos: [
      { name: '图形+文字', imgSrc: '/img/illus/bone.svg' },
      { name: '徽标', imgSrc: '/img/logo/领航员计划-徽标.svg' },
    ],
  },
  {
    title: '北京航天中心',
    source: '',
    logos: [
      { name: '图形+文字', imgSrc: '/img/illus/bone.svg' },
    ],
  },
  {
    title: '太空电梯',
    source: '',
    logos: [
      { name: '图形+文字', imgSrc: '/img/logo/太空电梯-图形-文字.svg' },
    ],
  },
  {
    title: '门框机器人',
    source: '',
    logos: [
      { name: '图形+文字', imgSrc: '/img/illus/bone.svg' },
    ],
  },
  {
    title: '2044 上海',
    source: '“图形+文字” · @克雷姬CraiGG.Z',
    logos: [
      { name: '图形+文字', imgSrc: '/img/logo/2044上海-图形-文字.svg' },
      { name: '海报', imgSrc: '/img/logo/2044上海-海报.svg' },
    ],
  },
  {
    title: '中国应急预案执行组',
    source: '',
    logos: [
      { name: '图形+文字', imgSrc: '/img/illus/bone.svg' },
    ],
  },
  {
    title: '中国科学院数字生命研究所',
    source: '',
    logos: [
      { name: '图形+文字', imgSrc: '/img/illus/bone.svg' },
    ],
  },
  {
    title: '中国互联网中心北京基地',
    source: '',
    logos: [
      { name: '图形+文字', imgSrc: '/img/illus/bone.svg' },
    ],
  },
  {
    title: '智能量子计算机重点实验室',
    source: '',
    logos: [
      { name: '图形+文字', imgSrc: '/img/illus/bone.svg' },
    ],
  },
]);
</script>

<style scoped></style>