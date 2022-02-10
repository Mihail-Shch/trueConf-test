<template>
  <div class="timeblock">
    <p>До смены цвета</p>
    <p>{{ time }} секунд</p>
  </div>
</template>

<script>
export default {
  props: {
    time: Number,
  },
};
</script>

<style scoped>
.timeblock {
  display: inline-block;
  text-align: center;

  margin-left: 20px;

  border: 2px solid #000;
  border-radius: 5px;

  padding: 5px;
}
</style>