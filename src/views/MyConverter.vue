<template>
  <div class="overflow-hidden">
    <div class="flex w-full">
      <div class="fle fle-column">
        <div class="flex-inline flex-col">
          <!-- <h2 class="text-xl font-bold">
            Курсы валют ЦБ РФ на: {{ valuteData.Date.substr(0, 10) }}
          </h2>
          <h2 class="text-sm font-medium">
            Последнее обновление базы данных:
            {{ valuteData.Timestamp.substr(0, 10) }}
          </h2> -->
        </div>
        <div>
          <div class="grid grid-cols-2 max-w-sm mt-5 gap-3">
            <div v-for="el in select" :key="el">
              <select class="border p-2 rounded-md w-full" data-te-select-init>
                <option v-for="el in valute.valute" :key="el.ID" :value="el.ID">
                  {{ el.CharCode }}
                </option>
              </select>
            </div>
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
      <div
        class="flex-col max-w-xs flex overflow-auto pb-6 aic ml-auto mr-10 max-h-96"
      >
        <div
          v-for="(item, index, i) in valute.valute"
          :key="item.ID"
          :class="i >= 1 ? 'mt-2' : ''"
          class="card rounded-lg border-2 min-w-16 min-h-9"
        >
          <div class="card__name px-4 py-2 mt-2 relative max-h-12">
            <div class="flex h-12">
              <img
                class="mr-4 w-16 h-8 border"
                :src="`https://flagcdn.com/${item.CharCode.substring(
                  0,
                  item.CharCode.length - 1
                ).toLowerCase()}.svg`"
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
    <!-- <input class="border rounded-sm" type="text" v-model="searchValue" /> -->
    <!-- <pre>
     {{ valuteData.Valute }}
    </pre> -->
    <pre>
      {{ valute }}
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      flags: '',
      searchValue: '',
      select: 2,
    };
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
};
</script>

<style lang="scss" scoped></style>
