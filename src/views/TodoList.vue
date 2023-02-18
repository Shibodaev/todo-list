<template>
  <div class="todo flex flex-col">
    <div class="mb-5 flex content-center">
      <div class="w-full sm:w-1/2 px-3 mb-3 sm:mb-0">
        <input
          class="block py-4 px-3 w-full text-sm text-black-70 placeholder-black-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
          id="formInput1-1"
          type="text"
          placeholder="Entry your task"
        />
      </div>
      <button
        class="ml-4 color-green-600 font-weight-600 text-3xl button-add w-5 h-5 p-1 rounded-2xl box-border"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      viewForm: false,
    };
  },
  methods: {},
};
</script>
