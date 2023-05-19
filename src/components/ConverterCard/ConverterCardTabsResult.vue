<template>
  <div>
    <div class="border p-4 max-w-xl w-full">
      <div>
        {{ defaultValute.Name }}
      </div>
      <input
        :value="defaultValute.Nominal"
        type="text"
        class="my-2 text-2xl font-bold focus:border-none focus:outline-none w-full"
      />

      <div>
        {{ defaultValute.Nominal * defaultValute.Value }} - Российских рублей
      </div>
      <span class="mt-4 block text-xs text-gray-400">
        {{ defaultValute.Nominal }} - {{ defaultValute.Name }} =
        {{ defaultValute.Value }} Российских рублей
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nominal: '',
    };
  },
  props: {
    defaultValute: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style></style>
