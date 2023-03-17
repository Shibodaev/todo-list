<template>
  <div class="card rounded-lg border-2 min-w-16 min-h-7">
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
            item.Value > item.Previous ? ' text-red-300' : ' text-green-300'
          }`"
          :icon="` fa-arrow-up fa-arrow${
            item.Value > item.Previous ? '-down' : '-up'
          }`"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  props: {
    item: {
      type: Object,
      default: () => ({
        Value: {
          type: String,
          default: '',
        },
        Previous: {
          type: String,
          default: '',
        },
        CharCode: {
          type: String,
          default: '',
        },
        Name: {
          type: String,
          default: '',
        },
      }),
    },
  },
};
</script>

<style lang="scss" scoped></style>
