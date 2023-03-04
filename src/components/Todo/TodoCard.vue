<template>
  <div
    class="flex flex-col card-task border border-solid border-gray-200 rounded-lg box-border w-full max-w-xs mt-4 overflow-hidden"
  >
    <div class="card-task__head bg-green-300 p-4 flex items-center">
      <div class="flex flex-col w-full">
        <div class="w-full block">
          <input
            class="p-2 box-border text-xs border-b bg-transparent border-gray-100"
            v-show="noView"
            type="text"
            v-model="taskTitle"
          />
          <span
            @click="noView = !noView"
            class="float-right h-4 w-4 transititext-primary text-primary transition duration-75 mt-2 hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            data-te-toggle="tooltip"
            title="Hi! I'm tooltip"
          >
            <font-awesome-icon
              class="w-full h-full align-top pointer-events-none"
              :icon="noView ? ['fa', 'fa-pen-to-square'] : ['fa', 'fa-pen']"
            />
          </span>
          <span
            class="overflow-hidden break-words"
            :class="[noView ? 'w-full block' : 'w-auto float-left']"
            >{{ taskTitle }}</span
          >
        </div>
      </div>
    </div>
    <div class="card-task__body p-4 flex flex-col">
      <div class="card-task__container">
        <input
          class="w-full p-2 box-border text-xs border-b bg-transparent border-gray-600"
          type="text"
        />
      </div>
      <!-- <button
        class="w-full flex items-center border border-gray-500 justify-center p-3 rounded-lg border-solid hover:bg-green-200 hover:border-green-200 font-semibold ease-in-out duration-200 active:bg-green-500"
      >
        Add Task
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      taskTitle: '',
      noView: true,
      valueInput: '',
      input:
        " <input class='p-2 box-border text-xs border-b bg-transparent border-gray-100' v-show='noView' type='text' v-model='task' @change='getTask(event)'/>",
    };
  },
  computed: {},
  methods: {
    getTask(event) {
      console.log(event);
    },
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    inputValue: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.card-task__head input {
  width: calc(100% - 40px);
}
</style>
