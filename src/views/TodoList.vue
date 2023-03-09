<template>
  <div class="todo flex flex-col" id="todo">
    <h1 class="mt-0 font-bold text-4xl mb-5">Welcome to my Todo-list</h1>
    <!-- <button
      v-on:click="isBlock = !isBlock"
      class="emoji-color-green transition ease-in-out delay-150 btn inline-flex items-center justify-center w-10 h-10 box-border border border-solid border-green-500 rounded-lg hover:border-blue-400"
    >
      <span class="emoji-color-green transition ease-in-out delay-150"
        ><font-awesome-icon :icon="['fa-solid', 'fa-plus']"
      /></span>
    </button> -->
    <br />
    <div class="container-task">
      <todo-card> </todo-card>
    </div>
  </div>
</template>

<script>
import TodoCard from '@/components/Todo/TodoCard.vue';
export default {
  components: {
    TodoCard,
  },
  data() {
    return {
      viewForm: false,
      isBlock: true,
    };
  },
};
</script>

<style lang="scss"></style>
