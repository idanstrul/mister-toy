import { createRouter, createWebHashHistory } from 'vue-router';
import home from "../views/home.vue";
import about from "../views/about.vue"
import toyApp from "../views/toy-app.cmp.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp

    }
  ]
})

export default router
