<template>
  <div>
    <div class="flex w-full flex-col">
      <div>
        <div class="flex-inline flex-col">
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
      <div class="inline-grid grid-cols-2 mt-4">
        <!-- <pre>
           {{ defaultValute }}
        </pre> -->
        <converter-card-tabs> </converter-card-tabs>
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
  // setup(props, ctx) {},
  setup() {
    return {
      view: false,
      defaultNominal: 1,
      content: {},
      defaultValute: null,
      // this.$store.state.valute.valute
      flags: '',
      searchValue: '',
    };
  },
  provide() {
    return {
      defaultValuteData: this.defaultValute,
    };
  },
  components: {
    ConverterCardTabs,
    // SelectCode,
    // ConverterCard,
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
    selectValue(e, val) {
      console.log(e);
      console.log(val);
    },
    openTab(object, key) {
      // eslint-disable-next-line no-prototype-builtins
      if (object.hasOwnProperty(key)) {
        this.defaultValute = object[key];
        this.view = false;
        return this.defaultValute;
      }
      // for (let i = 0; i < Object.keys(object).length; i++) {
      //   if (typeof object[Object.keys(object)[i]] === 'object') {
      //     let o = this.openTab(object[Object.keys(object)[i]], key);
      //     if (o != null) return (this.defaultValute = o);
      //   }
      // }

      return null;
    },
    shortTitle(title) {
      if (typeof title != 'string') return;
      return title.substr(0, 10);
    },
  },
};
</script>

<style lang="scss" scoped></style>
