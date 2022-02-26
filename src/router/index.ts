import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/pokeTeam',
    name: 'PokeTeam',
    component: () => import('../views/PokeTeam.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import('../views/Teams.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
