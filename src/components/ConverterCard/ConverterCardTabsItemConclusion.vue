<template>
  <div class="border p-4 max-w-xl w-full">
    <div>
      {{ tabsResult.Name }}
    </div>
    <input
      :value="changeValue"
      type="text"
      class="my-2 text-2xl font-bold focus:border-none focus:outline-none"
    />

    <div>{{ inputValue * tabsResult.Value }} - Российских рублей</div>
    <span class="mt-4 block text-xs text-gray-400">
      {{ tabsResult.Nominal }} - {{ tabsResult.Name }} =
      {{ tabsResult.Value }} Российских рублей
    </span>
  </div>
</template>

<script>
export default {
  watch: {
    getTabResult: {
      handler() {
        this.inputValue = this.tabsResult.Nominal;
      },
      immediate: true,
    },
  },
  data() {
    return {
      inputValue: this.tabsResult.Nominal,
    };
  },
  props: {
    tabsResult: {
      type: Object,
      // default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped></style>
