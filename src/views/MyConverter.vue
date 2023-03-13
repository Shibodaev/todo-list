<template>
  <div class="overflow-hidden">
    <!-- <h2 class="text-xl font-bold">
      Курсы валют ЦБ РФ на: {{ valuteData.Date.substr(0, 10) }}
    </h2>
    <h2 class="text-sm font-medium">
      Последнее обновление базы данных: {{ valuteData.Timestamp.substr(0, 10) }}
    </h2> -->

    <input class="border rounded-sm" type="text" v-model="search" />
    <!-- <pre>
     {{ valuteData.Valute }}
    </pre> -->

    <div class="mt-2 flex overflow-auto py-6 aic">
      <div
        v-for="(item, index, i) in valuteData.Valute"
        :key="item.ID"
        :class="i >= 1 ? 'ml-2' : ''"
        class="card shadow-xl rounded-lg border-2 min-w-16 h-36"
      >
        <div class="card__name px-4 py-2 mt-2 relative max-h-12">
          <div class="flex h-12">
            <!-- <img
              class="mr-4 w-16 h-8 border"
              :src="`https://flagcdn.com/${item.CharCode.substring(
                0,
                item.CharCode.length - 1
              ).toLowerCase()}.svg`"
              alt=""
            /> -->
            <span class="text-black leading-tight text-xs -mt-1">
              {{ item.Name }}</span
            >
          </div>
          <div class="w-full">{{ index }}</div>

          <div class="mt-2">
            Текущий курс: {{ item.Value }}
            <font-awesome-icon
              :class="`ml-2 text-${
                item.Value > item.Previous ? 'red' : 'green'
              }-300`"
              :icon="` fa-arrow-up fa-arrow${
                item.Value > item.Previous ? '-down' : '-up'
              }`"
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      valuteData: [],
      flags: '',
      search: '',
    };
  },
  // computed: {
  //   searchValute() {
  //     return this.valuteData.filter(function (item) {
  //       item.Valute.Name.indexOf(this.search) !== -1;
  //     });
  //   },
  // },
  created() {
    axios
      .get('http://www.cbr-xml-daily.ru/daily_json.js', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        this.valuteData = response.data;
      })
      .catch(new Error());
  },
};
</script>

<style lang="scss" scoped></style>
