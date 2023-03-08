<template>
  <div
    class="flex flex-col card-task border border-solid border-gray-200 rounded-lg box-border w-full max-w-xs mt-4 overflow-hidden"
  >
    <div class="card-task__head flex items-center">
      <form class="w-full block p-4 border-b bg-transparent border-black-800">
        <input
          class="p-2 box-border text-xs w-full"
          type="text"
          placeholder="Добавить задачу"
          :value="inputValue"
          v-on:input="handlerInput($event)"
        />
      </form>
    </div>
    <div class="card-task__body p-4 flex flex-col">
      <div class="card-task__container">
        <template v-if="tasks">
          <task-input-vue
            v-for="(item, index) in tasks"
            :key="index"
            :id="index"
            :item="item.task"
            @click="deleteElement($event, item.id)"
          ></task-input-vue>
        </template>
      </div>
      <button
        @click="addTask()"
        class="w-full flex items-center border border-gray-500 justify-center p-3 rounded-lg border-solid hover:bg-green-200 hover:border-green-200 font-semibold ease-in-out duration-200 active:bg-green-500 mt-4"
      >
        Add Task
      </button>
    </div>
  </div>
</template>

<script>
import TaskInputVue from './TaskInput.vue';

export default {
  components: {
    TaskInputVue,
  },
  data() {
    return {
      tasks: [],
      inputValue: null,
    };
  },
  computed: {},
  methods: {
    addTask() {
      if (!this.inputValue) return;
      this.tasks.push({
        id: this.tasks.length,
        task: this.inputValue,
      });
      this.inputValue = '';
    },
    handlerInput(event) {
      this.inputValue = event.target.value;
    },
    deleteElement(e) {
      if (!e.target.attributes['data-delete']) return;
      this.tasks.splice(e.currentTarget.getAttribute('data-parent'), 1);
      return this.tasks;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-task__head {
  &:hover {
    span {
      @apply opacity-100 pointer-events-auto;
    }
  }
}
</style>
