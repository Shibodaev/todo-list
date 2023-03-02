<template>
  <div class="todo flex flex-col" id="todo">
    <h1 class="mt-0 font-bold text-4xl mb-5">Welcome to my Todo-list</h1>
    <button
      v-on:click="isBlock = !isBlock"
      class="emoji-color-green transition ease-in-out delay-150 btn inline-flex items-center justify-center w-10 h-10 box-border border border-solid border-green-500 rounded-lg hover:border-blue-400"
    >
      <span class="emoji-color-green transition ease-in-out delay-150">➕</span>
    </button>
    <br />
    <div :class="{ hidden: isBlock }" class="container-task">
      <todo-card :title="title" :content="inputValue"> </todo-card>
    </div>
  </div>
</template>

<script>
// import Icon from 'vue-awesome/components/Icon';
import TodoCard from '@/components/Todo/TodoCard.vue';
export default {
  components: {
    TodoCard,
    // 'v-icon': Icon,
  },
  data() {
    return {
      viewForm: false,
      title: '',
      inputValue: '',
      isBlock: true,
    };
  },
  computed: {},
  methods: {
    createTask() {},
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
