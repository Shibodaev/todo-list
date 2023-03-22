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
        <div class="b-tabs mr-auto">
          <div class="b-tabs__head relative border flex">
            <ul class="inline-grid grid-cols-5 items-center justify-center">
              <template v-for="(item, index, i) in valute.valute.Valute">
                <li
                  :id="item.ID"
                  :key="item.ID"
                  v-if="i < 4"
                  class="flex-inline py-2 px-4 border-r"
                  @:click="openTab(valute.valute.Valute, item.CharCode)"
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
                    v-for="el in valute.valute.Valute"
                    :key="el"
                    :id="el.ID"
                    v-on:click="openTab(valute.valute.Valute, el.CharCode)"
                  >
                    {{ el.CharCode }}
                  </div>
                </li>
              </template>
            </ul>
          </div>
          <div class="b-tabs__content">
            <h2 class="mb-4 font-medium text-xl mt-4">Ваши средства</h2>

            <input
              v-model="defaultValute.Nominal"
              class="border p-2 w-full h-24 mt-6 text-2xl font-bold"
            />
            <span class="mt-4 block">
              {{ defaultValute.Nominal * defaultValute.Value }} =
              {{ defaultValute.Name }}
            </span>
          </div>
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
        {{ d }}
      </pre> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
// import SelectCode from '@/components/select/SelectCode';
// import ConverterCard from '@/components/ConverterCard/ConverterCard';

export default {
  // setup(props, ctx) {},
  data() {
    return {
      view: false,
      defaultNominal: 1,
      content: {},
      defaultValute: this.$store.state.valute.valute['Valute']['USD'],
      flags: '',
      searchValue: '',
    };
  },
  props: {
    // defaultValute: {
    //   type: Object,
    //   default: () => ({
    //     Name: String,
    //     ID: String,
    //     NumCode: String,
    //     CharCode: String,
    //     Nominal: Number,
    //     Value: Number,
    //     Previous: Number,
    //   }),
    // },
  },
  components: {
    // SelectCode,
    // ConverterCard,
  },
  created() {
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
