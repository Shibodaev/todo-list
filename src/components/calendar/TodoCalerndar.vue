<template>
  <div>{{ calendar.toLocaleDateString() }}</div>
</template>

<script>
export default {
  data() {
    return {
      calendar: new Date(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
