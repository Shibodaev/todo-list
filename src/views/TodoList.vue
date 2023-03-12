<template>
  <div class="todo flex flex-col" id="todo">
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
