<template>
  <div>
    <header class="header">
      <div class="container mx-auto">
        <div class="header__inner flex content-center">
          <h2>
            <router-link class="text-orange-300 text-5xl" to="/">
              <span> {{ logoDefault }}</span>
            </router-link>
          </h2>
          <h1 class="ml-5 text-3xl font-bold flex content-center leading-snug">
            <span>{{ titlePage }}</span>
          </h1>
        </div>
      </div>
    </header>
    <div class="container mx-auto">
      <main class="application">
        <aside class="application__sidebar">
          <template v-for="elem in addenda" :key="elem">
            <router-link class="text-blue-700 w-full block" :to="elem.url">{{
              elem.title
            }}</router-link>
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
      logoDefault: `🏠`,
      titlePage: null,
      addenda: {
        todo: {
          title: "Todo List",
          url: "/todolist",
          logo: `📙`,
        },
        calculator: {
          title: "Calculator",
          url: "/calculator",
          logo: `💻`,
        },
      },
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.titlePage = to.meta.title || "Some Default Title";
      },
    },
  },
};
</script>
