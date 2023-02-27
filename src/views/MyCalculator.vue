<template>
  <div class="calculator flex flex-col w-full max-w-sm">
    <div
      class="calculator__result cursor-text hover:border-green-300 block py-4 px-3 w-full text-sm text-black-70 placeholder-black-50 font-medium outline-none bg-transparent border border-gray-400 rounded-lg"
      v-text="result"
    ></div>
    <div class="calculator__btn-container grid grid-cols-4 mt-2">
      <template v-for="item in buttons" :key="item">
        <button
          @:click="(event) => entryButton(event)"
          :class="item === '=' ? 'col-start-1 col-end-3' : ''"
          class="flex-inline content-center justify-center p-2 hover:bg-slate-400 border border-solid border-slate-400 hover:text-white"
          v-text="item"
        ></button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: '',
      buttons: [
        '1',
        '2',
        '3',
        '+',
        '4',
        '5',
        '6',
        '-',
        '7',
        '8',
        '9',
        '*',
        '=',
        'C',
        '0 ',
      ],
    };
  },
  computed: {},
  methods: {
    entryButton(e) {
      this.result += e.target.innerText;
      switch (e.target.innerText) {
        case 'C':
          this.result = '';
          break;
      }
    },
  },
};
</script>
