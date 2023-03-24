<template>
  <div class="b-tabs mr-auto">
    <div class="b-tabs__head relative border flex">
      <ul class="inline-grid grid-cols-5 items-center justify-center">
        <converter-card-tabs-item></converter-card-tabs-item>
      </ul>
    </div>
    <div class="b-tabs__content">
      <h2 class="mb-0 font-medium text-xl mt-4">Ваши средства</h2>
      <input
        type="number"
        class="border p-2 w-full h-24 mt-6 text-2xl font-bold"
      />

      <!-- v-model="defaultValute.Nominal" -->
      <!-- <span class="mt-4 block">
        {{ defaultValute.Nominal * defaultValute.Value }} =
        {{ defaultValute.Name }}
      </span> -->
    </div>
  </div>
</template>

<script>
import ConverterCardTabsItem from './ConverterCardTabsItem';

export default {
  components: { ConverterCardTabsItem },
  setup() {
    return {};
  },
  props: {},
};
</script>

<style lang="scss" scoped></style>
