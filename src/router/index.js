import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/DetailMovie'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Popular',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail/:idMovie',
    name: 'detailMovie',
    props: true,
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
