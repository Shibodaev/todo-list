<template>
  <div
    class="flex flex-col card-task border border-solid border-black rounded-lg box-border p-2 w-full max-w-xs mt-4"
  >
    <div class="card-task__head" @click="() => $event.title">
      {{ title }}
      <span>🖊️</span>
    </div>
    <div class="card-task__body"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    inputValue: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
