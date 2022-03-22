import { createRouter, createWebHistory} from 'vue-router'
import StartFire from '../components/StartFire.vue'
import ChooseFeeling from '../components/ChooseFeeling.vue'
import AddWood from '../components/AddWood.vue'
import FireSettings from '../components/FireSettings.vue'

const routes = [
  { path: '/', component: StartFire },
  { path: '/start-fire', component: StartFire },
  { path: '/choose-feeling', component: ChooseFeeling },
  { path: '/add-wood', component: AddWood },
  { path: '/fire-settings', component: FireSettings },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router