import Vue from 'vue'
import VueRouter from 'vue-router'

import trafficLightColor from "@/components/TrafficLightColor.vue";


Vue.use(VueRouter)

const routes = [
    {
      path: '/red',
      component: trafficLightColor
    },
    {
      path: '/yellow',
      component: trafficLightColor
    },
    {
      path: '/green',
      component: trafficLightColor
    },
    {
      path: '/*',
      redirect: '/red'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
