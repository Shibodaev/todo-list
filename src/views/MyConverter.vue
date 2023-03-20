<template>
  <div class="overflow-hidden">
    <div class="flex w-full">
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
        <form>
          <div class="grid grid-cols-2 max-w-sm mt-5 gap-3">
            <div class="flex flex-col">
              {{ defaultValute }}
              <select
                class="border p-2 rounded-md w-full"
                data-te-select-init
                v-model="defaultValute"
                @change="selectValue($event)"
              >
                <option
                  selected="el"
                  v-for="el in valute.valute.Valute"
                  :key="el"
                  :value="el"
                >
                  {{ el.CharCode }}
                </option>
              </select>
              <!-- @keydown="
                  if (['+', '-', 'e'].includes($event.key))
                    $event.preventDefault();
                " -->
              <input
                pattern="^[ 0-9]+$"
                class="border mt-2 rounded-sm h-10 p-2"
                type="number"
                min="1"
                :value="defaultValute.Nominal"
              />
            </div>
          </div>
          <div class="flex flex-col mt-4">
            <!-- <div class="mb-1">{{ currentValute.Name }}</div> -->
          </div>
        </form>
      </div>
      <pre>
        <!-- {{ valute.valute.Valute }} -->
      </pre>
      <div
        class="flex-col max-w-xs flex overflow-auto pb-6 aic ml-auto mr-10 max-h-96"
      >
        <converter-card
          v-for="(item, index, i) in valute.valute.Valute"
          :key="item.ID"
          :class="i >= 1 ? 'mt-2' : ''"
          :item="item"
        ></converter-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
// import SelectCode from '@/components/select/SelectCode';
import ConverterCard from '@/components/ConverterCard/ConverterCard';

export default {
  model: {
    prop: '',
  },
  data() {
    return {
      defaultValute: {
        CharCode: 'RUB',
        Nominal: 1,
        Name: 'Российский рубль',
      },
      flags: '',
      searchValue: '',
    };
  },
  components: {
    // SelectCode,
    ConverterCard,
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
    shortTitle(title) {
      if (typeof title != 'string') return;
      return title.substr(0, 10);
    },
  },
};
</script>

<style lang="scss" scoped></style>
