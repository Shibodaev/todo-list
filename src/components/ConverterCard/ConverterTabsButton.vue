<template>
  <div
    :id="item.ID"
    :key="item.ID"
    :class="{ active: isActive }"
    @click="$emit('viewValute', item.CharCode), activeTab(isActive)"
    class="flex-inline py-2 px-4 border-r cursor-pointer"
  >
    {{ item.CharCode }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    activeTab() {
      console.log(this.$watch);
      console.log();
    },
  },
  props: {
    item: Object,
    default: () => ({}),
  },
};
</script>

<style lang="scss" scoped></style>
