<template>
  <div class="todo flex flex-col" id="todo">
    <h1 class="mt-0 font-bold text-4xl mb-5">Welcome to my Todo-list</h1>
    <button
      class="emoji-color-green transition ease-in-out delay-150 btn inline-flex items-center justify-center w-10 h-10 box-border border border-solid border-green-500 rounded-lg hover:border-blue-400"
    >
      <span class="emoji-color-green transition ease-in-out delay-150">➕</span>
    </button>
    <div class="container-task"></div>
  </div>
</template>

<script>
// import Icon from 'vue-awesome/components/Icon';
export default {
  components: {
    // 'v-icon': Icon,
  },
  data() {
    return {
      viewForm: false,
      title: '',
    };
  },
  methods: {
    changeTitle() {},
  },
};
</script>

<style lang="scss">
.emoji-color-green {
  span {
    color: transparent;
    text-shadow: 0 0 0 rgb(7, 177, 7);
  }
  &:hover {
    span {
      text-shadow: 0 0 0 rgb(96 165 250);
    }
  }
}
</style>
