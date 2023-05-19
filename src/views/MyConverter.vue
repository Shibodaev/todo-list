<template>
  <div>
    <div class="flex w-full flex-col">
      <div>
        <div class="flex-inline flex-col col">
          <h2 class="text-xl font-bold">
            Курсы валют ЦБ РФ на:
            {{ shortTitle(valute.valute.Date) }}
          </h2>
          <h2 class="text-sm font-medium">
            Последнее обновление базы данных:
            {{ shortTitle(valute.valute.Timestamp) }}
          </h2>
        </div>
      </div>
      <div class="flex max-w-3xl gap-5 mt-5">
        <div class="max-w w-full max-w-xs">
          <h2 class="mb-3">У меня есть</h2>
          <converter-card-tabs
            :rub="true"
            :valutaToConverter="valute.valute.Valute"
            :max="3"
          >
          </converter-card-tabs>
        </div>
        <div class="relative">
          <font-awesome-icon
            style="transform: translateY(-50%)"
            class="relative top-2/4 cursor-pointer w-10 h-10"
            :icon="['fas', 'right-left']"
          />
        </div>
        <div class="w-full max-w-xs">
          <h2 class="mb-3">Хочу приобрести</h2>
          <converter-card-tabs
            :rub="false"
            :valutaToConverter="valute.valute.Valute"
            :max="3"
          >
          </converter-card-tabs>
        </div>
      </div>
      <div
        class="flex-col max-w-xs flex overflow-auto pb-6 aic ml-auto mr-10 max-h-96"
      >
        <!-- <converter-card
          v-for="(item, index, i) in valute.valute.Valute"
          :key="item.ID"
          :class="i >= 1 ? 'mt-2' : ''"
          :item="item"
        ></converter-card> -->
      </div>
      <!-- <pre>
        {{ $store.state }}
      </pre> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import ConverterCardTabs from '@/components/ConverterCard/ConverterCardTabs';

// import { provide } from 'vue';
// import SelectCode from '@/components/select/SelectCode';
// import ConverterCard from '@/components/ConverterCard/ConverterCard';

export default {
  components: {
    ConverterCardTabs,
  },
  data() {
    return {
      defaultNominal: 1,
      content: {},
      flags: '',
      searchValue: '',
    };
  },
  mounted() {
    this.$store.dispatch('getAllValute');
  },
  computed: {
    ...mapState(['valute']),
    ...mapGetters(['getVal']),

    // searchValute() {
    //   return Object.values(this.valuteData.Valute).filter((item) => {
    //     // if (item === null) return;
    //     // if (item === '') return true;
    //     // console.log(Object.values(item)[]);
    //     Object.values(item)[2].indexOf(this.searchValue) !== -1;
    //   });
    // },
  },
  methods: {
    shortTitle(title) {
      if (typeof title != 'string') return;
      return title.substr(0, 10);
    },
  },
};
</script>

<style lang="scss" scoped></style>
