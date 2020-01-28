import Vue from 'vue'
import VueRouter from 'vue-router'
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);
Vue.use(VueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/City.vue')
    },
    {
      path: '/zip',
      name: 'zip',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/Zip.vue')
    },
    {
      path: '/region',
      name: 'region',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/Region.vue')
    }
  ]
});




/*const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router*/
