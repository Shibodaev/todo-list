<template>
  <div class="mr-auto">
    <div
      class="relative border inline-grid grid-cols-5 items-center justify-center rounded"
    >
      <!-- <tabs-button :item="RUB" v-if="rub"> </tabs-button> -->
      <template v-for="(item, i, index) in valutaToConverter">
        <tabs-button
          @viewValute="openTab(valutaToConverter, i)"
          :key="item.ID"
          :item="item"
          :max="max"
          v-if="index < max"
        >
        </tabs-button>

        <!--  -->
        <div
          class="flex items-center justify-center"
          v-else-if="index === max + 1"
          :key="index"
          @click="($event) => (view = !view)"
        >
          <font-awesome-icon
            icon="fa-solid fa-chevron-down cursor-pointer"
            :style="{ transform: `scaleY( ${view ? '-1' : '1'})` }"
          />
        </div>
        <!--  -->
        <div
          v-else-if="index === max + 2"
          class="absolute left-0 top-10 grid border bg-white h-60 w-full p-4 grid-cols-5 cursor-pointer"
          :key="item.key"
          v-show="view"
        >
          <div
            href="/"
            class="text-xs cursor-pointer hover:text-blue-400"
            v-for="el in valutaToConverter"
            :key="el"
            :id="item.ID"
            @:click="($event) => openTab(valutaToConverter, el.CharCode)"
          >
            {{ el.CharCode }}
          </div>
        </div>
      </template>
    </div>
    <tabs-result
      class="mt-4 rounded overflow-hidden"
      :defaultValute="defaultValute"
    ></tabs-result>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import TabsButton from './ConverterTabsButton.vue';
import TabsResult from './ConverterCardTabsResult';
export default {
  components: {
    TabsButton,
    TabsResult,
  },
  computed: {
    ...mapState(['valute']),
    ...mapGetters(['getVal']),
  },
  data() {
    return {
      isActive: false,
      view: false,
      nominal: 0,
      defaultValute: this.$store.getters.getVal.Valute,
    };
  },

  props: {
    max: Number,
    valutaToConverter: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    rub: {
      type: Boolean,
    },
  },
  methods: {
    openTab(object, key) {
      // eslint-disable-next-line no-prototype-builtins
      if (object.hasOwnProperty(key)) {
        this.$data.isActive = true;
        this.defaultValute = object[key];
        this.view = false;
        return this.defaultValute;
      }

      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
li.active {
  @apply bg-blue-400 text-white;
}
</style>
