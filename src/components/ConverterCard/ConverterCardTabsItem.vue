<template>
  <template v-for="(item, index, i) in defaultValuteData">
    <li
      :id="item.ID"
      :key="item.ID"
      v-if="i < 4"
      class="flex-inline py-2 px-4 border-r"
      @:click="openTab(defaultValuteData, item.CharCode)"
    >
      {{ item.CharCode }}
    </li>
    <li
      class="flex items-center justify-center"
      v-else-if="i === 4"
      :key="item.ID"
      @click="view = !view"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </li>
    <li
      v-else-if="i === 5"
      class="absolute left-0 top-10 grid border bg-white h-60 w-full p-4 grid-cols-5"
      :key="item.ID"
      v-show="view"
    >
      <div
        href="/"
        class="text-xs cursor-pointer"
        v-for="el in defaultValuteData"
        :key="el"
        :id="el.ID"
        v-on:click="openTab(defaultValuteData, el.CharCode)"
      >
        {{ el.CharCode }}
      </div>
    </li>
  </template>
</template>

<script>
export default {
  setup() {
    return {};
  },
  inject: ['defaultValuteData'],
};
</script>

<style lang="scss" scoped></style>
