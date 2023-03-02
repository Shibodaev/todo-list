<template>
  <div
    class="flex flex-col card-task border border-solid min-h-13 border-gray-200 rounded-lg box-border p-4 w-full max-w-xs mt-4"
  >
    <div class="card-task__head flex items-center">
      <div class="flex flex-col w-full">
        <div class="w-full block">
          <input
            class="p-2 box-border text-xs border-b border-gray-100"
            v-show="noView"
            type="text"
            v-model="taskTitle"
          />
          <span class="float-right" @click="noView = !noView">
            <font-awesome-icon
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
    <div class="card-task__body">
      {{ inputValue }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskTitle: '',
      noView: true,
    };
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

<style lang="scss" scoped></style>
