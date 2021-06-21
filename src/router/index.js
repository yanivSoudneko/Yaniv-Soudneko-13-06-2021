import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/main.vue'
import Favorites from '../pages/favorites.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Favorites',
    name: 'Favorites',
    component:Favorites
    
  }
]

const router = new VueRouter({
  routes
})

export default router
