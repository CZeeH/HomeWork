import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/shownews/:pages',
    name: 'News',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/News.vue')
    }
  },
  {
    path: '/news/:id',
    name: 'SingleNews',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/OneNews.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
