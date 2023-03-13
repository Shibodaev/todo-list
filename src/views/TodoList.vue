<template>
  <div class="todo flex flex-col" id="todo">
    <div class="container-task">
      <div class="flex items-center border-box">
        <!-- <input
          class="p-3 box-border border border-gray-500 mr-8 text-xs w-8/12 rounded-lg"
          type="text"
          placeholder="Добавить задачу"
          :value="inputValue"
          v-on:input="handlerInput($event)"
        />
        <button
          @click="addTask()"
          class="flex w-3/12 items-center border border-gray-500 line-through justify-center p-3 rounded-lg border-solid hover:bg-green-200 hover:border-green-200 font-semibold ease-in-out duration-200 active:bg-green-500"
        >
          Add Task
        </button> -->
      </div>
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
