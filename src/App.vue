<template>
  <div id="app">
    <div class="trafficLight">
      <TrafficLightColor class="trafficLight-red" color="/red" />
      <TrafficLightColor class="trafficLight-yellow" color="/yellow" />
      <TrafficLightColor class="trafficLight-green" color="/green" />
    </div>
    <TimeLeft :time="time" />
  </div>
</template>

<script>
import TrafficLightColor from "@/components/TrafficLightColor.vue";
import TimeLeft from "@/components/TimeLeft.vue";

class ColorObj {
  constructor(route, timeDuration) {
    this.route = route;
    this.timeDuration = timeDuration;
  }
}

export default {
  data() {
    return {
      activeColor: null,
      time: 0,
      interval: null,
    };
  },
  components: {
    TrafficLightColor,
    TimeLeft,
  },
  created() {
    var red = new ColorObj("/red", 10);
    var yellowToGreen = new ColorObj("/yellow", 3);
    var yellowToRed = new ColorObj("/yellow", 3);
    var green = new ColorObj("/green", 15);

    red.nextColor = yellowToGreen;
    yellowToGreen.nextColor = green;
    green.nextColor = yellowToRed;
    yellowToRed.nextColor = red;

    if (this.$route.path === "/red") {
      this.setActiveColor(red);
    } else if (this.$route.path === "/yellow") {
      this.setActiveColor(yellowToGreen);
    } else {
      this.setActiveColor(green);
    }
    this.setTime();
    this.changeColor();
  },
  methods: {
    changeColor() {
      setTimeout(() => {
        clearInterval(this.interval);
        this.$router.push(this.activeColor.nextColor.route).catch(() => {});
        this.setActiveColor(this.activeColor.nextColor);
        this.setTime();
        this.changeColor();
      }, this.activeColor.timeDuration * 1000);
    },
    setActiveColor(color) {
      this.activeColor = color;
    },
    setTime() {
      this.time = this.activeColor.timeDuration;
      this.interval = setInterval(() => {
        this.time--;
      }, 1000);
    },
  },
};
</script>

<style>
#app {
  display: flex;
  align-items: center;
}

.trafficLight {
  border: 2px solid #000;
  border-radius: 5px;

  padding: 5px;

  display: inline-block;
}
.trafficLight-red {
  background-color: red;
}
.trafficLight-yellow {
  background-color: yellow;
}
.trafficLight-green {
  background-color: green;
}
</style>
