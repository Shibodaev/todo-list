<template>
  <template v-for="(item, index, i) in dataValuta">
    <li
      :id="item.ID"
      :key="item.ID"
      v-if="i < 4"
      class="flex-inline py-2 px-4 border-r"
      v-on:click="openTab(dataValuta, item.CharCode)"
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
        v-for="el in dataValuta"
        :key="el"
        :id="item.ID"
        @:click="openTab(dataValuta, el.CharCode)"
      >
        {{ el.CharCode }}
      </div>
    </li>
  </template>
</template>

<script>
export default {
  data() {
    return {
      defaultValute: null,
      view: false,
    };
  },
  props: {
    dataValuta: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    openTab(object, key) {
      // eslint-disable-next-line no-prototype-builtins
      if (object.hasOwnProperty(key)) {
        this.defaultValute = object[key];
        this.view = false;
        return this.defaultValute;
      }

      return null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
