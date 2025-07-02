<template>
  <div>
    <Banner backgroundImage="/img/pages-banner/bg-logo.png" title="标志[ING]" />

    <div class="mx-auto max-w-[1200px] py-12">
      <div class="px-0 lg:px-4">
        <BaseCard class="p-6 lg:p-8">
          <p class="leading-loose text-gray-950">
            以下所有标志的修复底图都取自「流浪地球美术设定」和「流浪地球2制作手记」
          </p>
          <p class="leading-loose text-gray-950">
            参与修复人员：海藻酸钠 、 terminator7211 、琦琦
          </p>
        </BaseCard>
      </div>

      <div class="mt-12 px-4">
        <div class="flex flex-col gap-12">
          <div
            v-for="(category, index) in logos"
            :key="index"
            :id="`section-${index}`"
          >
            <TheTitle>{{ category.title }}</TheTitle>
            <div v-if="category.source" class="mt-2 mb-4">
              <OriginTag :text="category.source" />
            </div>
            <div class="mt-2 grid grid-cols-2 gap-4 lg:grid-cols-5">
              <NormalCard
                v-for="logo in category.logos"
                :key="logo.name"
                :title="logo.name"
                :imageSrc="logo.imgSrc"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 电梯导航 -->
    <ClientOnly>
      <div class="hidden lg:block">
        <div
          class="fixed top-40 right-4 z-40 flex flex-col"
          :class="{ 'invisible opacity-0': !showElevator }"
        >
          <div
            v-for="(category, index) in logos"
            :key="index"
            class="flex h-[24px] cursor-pointer items-center text-sm"
            :class="
              activeIndex === index
                ? 'font-bold text-[var(--primary-color)]'
                : 'text-gray-600'
            "
            @click="scrollToSection(index)"
          >
            <span
              class="mr-2 h-full w-[2px]"
              :class="
                activeIndex === index
                  ? 'bg-[var(--primary-color)]'
                  : 'bg-gray-300'
              "
            >
            </span>
            <div class="w-[100px] truncate p-1">
              {{ category.title }}
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logos from "~/assets/config/logos.json";

const activeIndex = ref(0);
const showElevator = ref(false);

const scrollToSection = (index) => {
  const section = document.getElementById(`section-${index}`);
  if (section) {
    const offsetTop = section.offsetTop;
    const offset = 100; // 偏移量
    window.scrollTo({
      top: offsetTop - offset,
      behavior: "smooth",
    });
  }
};

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  showElevator.value = scrollPosition > 100;

  const sections = logos.map((_, index) =>
    document.getElementById(`section-${index}`),
  );

  sections.forEach((section, index) => {
    if (section) {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        activeIndex.value = index;
      }
    }
  });
};

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});

useHead({
  title: "标志",
});
</script>
