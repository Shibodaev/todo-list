<template>
  <div
    class="flex items-center"
    :data-parent="id"
    :class="id > 0 ? 'mt-2' : ''"
  >
    <label class="flex items-centerc w-full custom-checkbox mr-2">
      <input
        type="checkbox"
        name="checkbox"
        value="indigo"
        v-model="light"
        :true-value="on"
        :false-value="off"
      />
      <span :class="{ checked: light }">{{ id + 1 }}. {{ item }}</span>
    </label>
    <span
      data-delete
      @click="$emit('deleteElement', $event)"
      class="ml-4 hover:text-green-400 active:text-green-600"
    >
      <font-awesome-icon
        class="pointer-events-none"
        :icon="['fa-solid', 'fa-xmark']"
      />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return { on: true, off: false, light: false };
  },
  methods: {},
  props: {
    item: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.checked {
  text-decoration: line-through;
}
.checkbox {
  margin-bottom: 0.2em;
}

/* для элемента input c type="checkbox" */
.custom-checkbox > input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* для элемента label, связанного с .custom-checkbox */
.custom-checkbox > span {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

/* создание в label псевдоэлемента before со следующими стилями */
.custom-checkbox > span::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

/* стили при наведении курсора на checkbox */
.custom-checkbox > input:not(:disabled):not(:checked) + span:hover::before {
  border-color: #b3d7ff;
}

/* стили для активного чекбокса (при нажатии на него) */
.custom-checkbox > input:not(:disabled):active + span::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox > input:focus + span::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox > input:focus:not(:checked) + span::before {
  border-color: #80bdff;
}

/* стили для чекбокса, находящегося в состоянии checked */
.custom-checkbox > input:checked + span::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox > input:disabled + span::before {
  background-color: #e9ecef;
}
</style>
