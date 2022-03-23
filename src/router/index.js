import { createRouter, createWebHistory} from 'vue-router'
import StartFire from '../components/StartFire.vue'
import ChooseFeeling from '../components/ChooseFeeling.vue'
import AddWood from '../components/AddWood.vue'
import FireSettings from '../components/FireSettings.vue'
import FriendsFires from '../components/FriendsFires.vue'
import SignIn from '../components/SignIn.vue'
import OurSettings from '../components/OurSettings.vue'

const routes = [
  { path: '/', component: SignIn },
  { path: '/start-fire/:red/:green/:blue', component: StartFire, props: true},
  { path: '/choose-feeling', component: ChooseFeeling },
  { path: '/add-wood', component: AddWood },
  { path: '/fire-settings', component: FireSettings },
  { path: '/friends-fires', component: FriendsFires },
  { path: '/settings', component: OurSettings },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router