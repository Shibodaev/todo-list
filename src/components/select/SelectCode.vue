<template>
  <div>
    <select
      @change="$emit('selectValue', $event)"
      class="border p-2 rounded-md w-full"
      data-te-select-init
    >
      <option v-for="(el, index, i) in elements" :key="el.ID" :value="el.ID">
        {{ el.CharCode }}
        {{ i + 1 }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: {
    elements: {
      type: Object,
      default: () => ({
        CharCode: String,
      }),
    },
  },
};
</script>

<style lang="scss" scoped></style>
