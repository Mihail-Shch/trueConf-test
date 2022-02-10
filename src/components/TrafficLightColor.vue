<template>
  <div class="trafficLight-color" :class="{ active: isActive }"></div>
</template>

<script>
export default {
  data() {
    return {
      isActive: null,
    };
  },
  props: {
    color: String,
  },
  watch: {
    "$route.path"() {
      this.setActiveColorByRoute();
    },
  },
  created() {
    this.setActiveColorByRoute();
  },
  methods: {
    setActiveColorByRoute() {
      this.isActive = this.$route.path === this.color;
    },
  },
};
</script>

<style scoped>
.trafficLight-color {
  width: 50px;
  height: 50px;
  border-radius: 25px;

  opacity: 0.3;
}

.trafficLight-color + .trafficLight-color {
  margin-top: 10px;
}

.active {
  opacity: 1;
}
</style>