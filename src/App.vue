<template>
  <div class="relative h-screen">
    <!-- <div class="w-full h-full top-0 bottom-0 absolute z-0 opacity-50 blur-0">
      <img
        src="~@/assets/gradient-2.jpg"
        class="absolute w-full h-screen top-0 left-0 right-0 bottom-0 m-0 p-0"
        alt=""
      />
    </div> -->
    <header class="header">
      <div class="container mx-auto">
        <div class="relative header__inner flex content-center items-center">
          <router-link class="text-orange-300 text-5xl" to="/">
            <span> {{ logoDefault }}</span>
          </router-link>
          <h1 class="ml-5 text-3xl font-bold flex content-center leading-snug">
            <span>{{ titlePage }}</span>
          </h1>
          <div class="border_r ml-auto">
            <font-awesome-icon
              @click="viewList = !viewList"
              icon="fa-solid fa-sliders"
              class="hover:text-green-800 cursor-pointer"
            />
            <div
              v-show="viewList"
              class="rounded-xl p-2 shadow-md bg-white border-gray-400 absolute"
            ></div>
          </div>
        </div>
      </div>
    </header>
    <div class="container border-r border-l mx-auto overflow-x-hidden">
      <main class="application min-h-screen">
        <aside class="application__sidebar pr-4">
          <template v-for="(elem, index, i) in addenda" :key="elem.id">
            <router-link
              :class="i >= 1 ? 'mt-2' : ''"
              class="text-blue-700 w-full rounded-full border flex items-center justify-center hover:bg-slate-400 hover:text-white duration-100 ease-in-out"
              :to="elem.url"
              >{{ elem.title }}</router-link
            >
          </template>
        </aside>
        <section class="application__main">
          <router-view />
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewList: false,
      logoDefault: `🏠`,
      titlePage: null,
      addenda: {
        todo: {
          title: 'Todo List',
          url: '/todolist',
          logo: `📙`,
        },
        calculator: {
          title: 'Calculator',
          url: '/calculator',
          logo: `💻`,
        },
        converter: {
          title: 'Converter',
          url: '/converter',
          logo: `💻`,
        },
      },
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.titlePage = to.meta.title || 'Some Default Title';
      },
    },
  },
};
</script>
<style scoped></style>
