import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClubHouse from '../views/ClubHouse.vue'
import Cards from '../views/Cards.vue'
import Divisions from '../views/Divisions.vue'
import Extras from '../views/Extras.vue'
import Example from '../views/Example.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/club-house',
    name: 'Club House',
    component: ClubHouse
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/divisions',
    name: 'Divisions',
    component: Divisions
  },
  {
    path: '/extras',
    name: 'Extras',
    component: Extras
  },
  {
    path: '/example',
    name: 'Example',
    component: Example
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
