<template>
  <div class="b-tabs mr-auto">
    <div class="b-tabs__head relative border flex">
      <ul class="inline-grid grid-cols-5 items-center justify-center">
        <converter-card-tabs-item
          :dataValuta="valutaToConverter"
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
  watch: {},
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
};
</script>

<style lang="scss" scoped></style>
