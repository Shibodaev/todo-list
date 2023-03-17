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
        <div>
          <div class="grid grid-cols-2 max-w-sm mt-5 gap-3">
            <select-code
              v-for="item in 2"
              :key="item"
              :elements="valute.valute.Valute"
            ></select-code>
          </div>
          <div>
            <input
              @keydown="
                if (['+', '-', 'e'].includes($event.key))
                  $event.preventDefault();
              "
              pattern="^[ 0-9]+$"
              class="border rounded-sm h-10 mt-5 p-2"
              type="number"
              min="1"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      <pre>
        <!-- {{ valute.valute.Valute }} -->
      </pre>
      <div
        class="flex-col max-w-xs flex overflow-auto pb-6 aic ml-auto mr-10 max-h-96"
      >
        <div
          v-for="(item, index, i) in valute.valute.Valute"
          :key="item.ID"
          :class="i >= 1 ? 'mt-2' : ''"
          class="card rounded-lg border-2 min-w-16 min-h-9"
        >
          <div class="card__name px-4 py-2 mt-2 relative max-h-12">
            <div class="flex h-12">
              <img
                class="mr-4 w-16 h-8 border"
                :src="`https://flagcdn.com/${
                  item.CharCode != 'XDR'
                    ? item.CharCode.substr(
                        0,
                        item.CharCode.length - 1
                      ).toLowerCase() + '.svg'
                    : ''
                }`"
                alt=""
              />
              <span class="text-black leading-tight text-xs -mt-1">
                {{ item.Name }}</span
              >
            </div>
            <!-- <div class="w-full">{{ index }}</div> -->

            <div class="mt-2">
              Текущий курс: {{ item.Value }}
              <font-awesome-icon
                :class="`ml-2 ${
                  item.Value > item.Previous
                    ? ' text-red-300'
                    : ' text-green-300'
                }`"
                :icon="` fa-arrow-up fa-arrow${
                  item.Value > item.Previous ? '-down' : '-up'
                }`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import SelectCode from '@/components/select/SelectCode.vue';
export default {
  data() {
    return {
      flags: '',
      searchValue: '',
    };
  },
  components: {
    SelectCode,
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
    shortTitle(title) {
      if (typeof title != 'string') return;
      return title.substr(0, 10);
    },
  },
};
</script>

<style lang="scss" scoped></style>
