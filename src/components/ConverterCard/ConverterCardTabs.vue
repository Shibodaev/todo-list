<template>
  <div class="b-tabs mr-auto">
    <div class="b-tabs__head relative border flex">
      <ul class="inline-grid grid-cols-5 items-center justify-center">
        <converter-card-tabs-item
          v-for="(item, index) in dataValuta"
          :key="item.ID"
          :dataValuta="valutaToConverter"
          @click-tab="openTab(defaultValute, index)"
        ></converter-card-tabs-item>
      </ul>
    </div>
    <div class="b-tabs__content">
      <h2 class="mb-0 font-medium text-xl mt-4">Ваши средства</h2>
      <converter-card-tabs-item-conclusion></converter-card-tabs-item-conclusion>
    </div>
  </div>
</template>

<script>
import ConverterCardTabsItemConclusion from '@/components/ConverterCard/ConverterCardTabsItemConclusion';
import ConverterCardTabsItem from '@/components/ConverterCard/ConverterCardTabsItem';

export default {
  data() {
    return {
      defaultValute: null,
    };
  },
  components: {
    ConverterCardTabsItem,
    ConverterCardTabsItemConclusion,
  },
  props: {
    valutaToConverter: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  openTab(object, key) {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty(key)) {
      this.defaultValute = object[key];
      this.view = false;
      return this.defaultValute;
    }

    return null;
  },
};
</script>

<style lang="scss" scoped></style>
