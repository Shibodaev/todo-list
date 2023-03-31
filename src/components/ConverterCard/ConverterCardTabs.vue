<template>
  <div class="b-tabs mr-auto">
    <div class="b-tabs__head relative border flex">
      <ul class="inline-grid grid-cols-5 items-center justify-center">
        <template v-for="(item, index, i) in valutaToConverter">
          <li
            :id="item.ID"
            :key="item.ID"
            v-if="i < 4"
            class="flex-inline py-2 px-4 border-r"
            v-on:click="openTab(valutaToConverter, item.CharCode)"
          >
            {{ item.CharCode }}
          </li>
          <li
            class="flex items-center justify-center"
            v-else-if="i === 4"
            :key="item.ID"
            @click="view = !view"
          >
            <font-awesome-icon
              icon="fa-solid fa-chevron-down cursor-pointer"
              :style="{ transform: `scaleY( ${!view ? '-1' : '1'})` }"
            />
          </li>
          <li
            v-else-if="i === 5"
            class="absolute left-0 top-10 grid border bg-white h-60 w-full p-4 grid-cols-5"
            :key="item.ID"
            v-show="!view"
          >
            <div
              href="/"
              class="text-xs cursor-pointer"
              v-for="el in valutaToConverter"
              :key="el"
              :id="item.ID"
              @:click="openTab(valutaToConverter, el.CharCode)"
            >
              {{ el.CharCode }}
            </div>
          </li>
        </template>
      </ul>
    </div>
    <div class="b-tabs__content">
      <h2 class="mb-0 font-medium text-xl mt-4">Ваши средства</h2>

      <converter-card-tabs-item-conclusion
        :modelValue="nominal"
        @update:modelValue="(newValue) => (nominal = newValue)"
        :tabsResult="defaultValute"
      >
        {{ nominal }}
      </converter-card-tabs-item-conclusion>
    </div>
  </div>
</template>

<script>
import ConverterCardTabsItemConclusion from '@/components/ConverterCard/ConverterCardTabsItemConclusion';

export default {
  setup() {
    return {
      defaultValute: null,
      view: true,
      nominal: 0,
    };
  },
  //   computed: {
  //     // products() {
  //     // //   return this.$store.state.valute.valute.Valute['USD'];
  //     // },
  //   },
  components: {
    ConverterCardTabsItemConclusion,
  },
  props: {
    valutaToConverter: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    openTab(object, key) {
      console.log(object);
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
