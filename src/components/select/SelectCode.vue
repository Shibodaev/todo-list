<template>
  <div>
    <select class="border p-2 rounded-md w-full" data-te-select-init>
      <option v-for="el in elements" :key="el.ID" :value="el.ID">
        {{ el.CharCode }}
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
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped></style>
