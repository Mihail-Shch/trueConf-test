<template>
  <div
    class="trafficLight-color"
    :class="{ active: ifIsActive, blinking: ifTimeToBlink }"
  ></div>
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
    timeLeft: Number,
  },
  computed: {
    ifTimeToBlink() {
      return this.isActive && this.timeLeft < 3;
    },
    ifIsActive() {
      return (this.isActive = this.$route.path === this.color);
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

.blinking {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>