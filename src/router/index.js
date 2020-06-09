import Vue from 'vue'
import VueRouter from 'vue-router'
// main routes
import Home from '../views/Home.vue'
import ClubHouse from '../views/ClubHouse.vue'
import Cards from '../views/Cards.vue'
import Divisions from '../views/Divisions.vue'
import Promo from '../views/Promo.vue'
import Extras from '../views/Extras.vue'
import Error from '../views/Error.vue'
import Example from '../views/Example.vue'
// clubhouse routes
import Training from '../views/clubhouseviews/Training.vue'
import Tactics from '../views/clubhouseviews/Tactics.vue'
import Exhibition from '../views/clubhouseviews/Exhibition.vue'
import Upgrades from '../views/clubhouseviews/Upgrades.vue'
import Camp from '../views/clubhouseviews/Camp.vue'
import EditClub from '../views/clubhouseviews/EditClub.vue'
import Roster from '../views/clubhouseviews/Roster.vue'
// cards routes
import MyCards from '../views/cardsviews/MyCards.vue'
import BuyCards from '../views/cardsviews/BuyCards.vue'
import Scout from '../views/cardsviews/Scout.vue'
import Slots from '../views/cardsviews/Slots.vue'
import Collection from '../views/cardsviews/Collection.vue'
// division routes
import Match from '../views/divisionviews/Match.vue'
import Leaderboards from '../views/divisionviews/Leaderboards.vue'
import DivisionStars from '../views/divisionviews/DivisionStars.vue'
import MatchResults from '../views/divisionviews/MatchResults.vue'
// extras routes
import Profile from '../views/extrasviews/Profile.vue'
import Achievements from '../views/extrasviews/Achievements.vue'
import Settings from '../views/extrasviews/Settings.vue'

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
    component: ClubHouse,
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
    path: '/promo',
    name: 'Promo',
    component: Promo
  },
  {
    path: '/extras',
    name: 'Extras',
    component: Extras
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  },
  {
    path: '/example',
    name: 'Example',
    component: Example
  },
  // clubhouse routes
  {
    path: '/training',
    name: 'Training',
    component: Training,
  },
  {
    path: '/tactics',
    name: 'Tactics',
    component: Tactics,
  },
  {
    path: '/exhibition',
    name: 'Exhibition',
    component: Exhibition,
  },
  {
    path: '/upgrades',
    name: 'Upgrades',
    component: Upgrades,
  },
  {
    path: '/camp',
    name: 'Camp',
    component: Camp,
  },
  {
    path: '/edit-club',
    name: 'EditClub',
    component: EditClub,
  },
  {
    path: '/roster',
    name: 'Roster',
    component: Roster,
  },
  // cards routes
  {
    path: '/my-cards',
    name: 'MyCards',
    component: MyCards,
  },
  {
    path: '/buy-cards',
    name: 'BuyCards',
    component: BuyCards,
  },
  {
    path: '/scout',
    name: 'Scout',
    component: Scout,
  },
  {
    path: '/slots',
    name: 'Slots',
    component: Slots,
  },
  {
    path: '/collection',
    name: 'Collection',
    component: Collection,
  },
  // divisions routes
  {
    path: '/match',
    name: 'Match',
    component: Match,
  },
  {
    path: '/leaderboards',
    name: 'Leaderboards',
    component: Leaderboards,
  },
  {
    path: '/division-stars',
    name: 'DivisionStars',
    component: DivisionStars,
  },
  {
    path: '/match-results',
    name: 'MatchResults',
    component: MatchResults,
  },
  // extras routes
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: Achievements,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
]

const router = new VueRouter({
  routes
})

export default router
