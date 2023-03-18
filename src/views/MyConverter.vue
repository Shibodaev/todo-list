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
            <!-- @change="$emit('selectValue', $event)"-->
            <select
              class="border p-2 rounded-md w-full"
              v-for="sel in 2"
              :key="sel"
              @change="selectValue($event)"
            >
              <option
                v-for="el in valute.valute.Valute"
                :key="el.ID"
                :value="el"
              >
                {{ el.CharCode }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mt-4">
            <div class="mb-1">{{ defaultString }}</div>
            <input
              @keydown="
                if (['+', '-', 'e'].includes($event.key))
                  $event.preventDefault();
              "
              pattern="^[ 0-9]+$"
              class="border rounded-sm h-10 p-2"
              type="number"
              min="1"
            />
          </div>
          <div class="flex flex-col mt-4">
            <div class="mb-1">{{ defaultString }}</div>
            <input
              @keydown="
                if (['+', '-', 'e'].includes($event.key))
                  $event.preventDefault();
              "
              pattern="^[ 0-9]+$"
              class="border rounded-sm h-10 p-2"
              type="number"
              min="1"
              v-model="currentValute"
            />
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
  data() {
    return {
      defaultValue: 1,
      defaultString: 'Rub - Российский рубль',
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
    selectValue() {
      console.log(this.defaultValue);
    },
    shortTitle(title) {
      if (typeof title != 'string') return;
      return title.substr(0, 10);
    },
  },
};
</script>

<style lang="scss" scoped></style>
