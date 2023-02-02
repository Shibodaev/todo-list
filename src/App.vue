<template>
  <div>
    <header>
      <div class="container">
        <h2>
          <router-link to="/">Home</router-link>
        </h2>
        <h1>
          {{ titlePage }}
        </h1>
      </div>
    </header>
    <main class="application">
      <aside class="application__sidebar">
        <template v-for="elem in addenda" :key="elem">
          <router-link :to="elem.url">{{ elem.title }}</router-link>
        </template>
      </aside>
      <section class="application__main">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titlePage: "Home",
      addenda: {
        todo: {
          title: "Todo List",
          url: "/todolist",
        },
      },
    };
  },
  computed: {},
};
</script>
