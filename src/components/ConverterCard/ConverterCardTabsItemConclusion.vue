<template>
  <div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue'), $event.target.value"
      type="number"
      class="border p-2 w-full h-24 mt-6 text-2xl font-bold"
    />
    <span class="mt-4 block">
      {{ value }} =
      {{ name }}
    </span>
  </div>
</template>

<script>
export default {
  setup() {},
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    tabsResult: {
      type: Object,
      default: () => ({}),
    },
    value: Number,
    nominal: Number,
    name: String,
  },
};
</script>

<style lang="scss" scoped></style>
