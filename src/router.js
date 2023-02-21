import { createRouter, createWebHistory } from 'vue-router'
import step1 from './components/formPersonalInfo/AppFormPersonalInfo'
import step2 from './components/selectplan/AppSelectPlan'
import step3 from './components/complements/AppComplements'
import step4 from './components/final/AppFinal'



const routes = [
  
  { path: '/', redirect: '/step1' },
  { path: '/step1', component: step1 },
  { path: '/step2', component: step2 },
  { path: '/step3', component: step3 },
  { path: '/step4', component: step4 },
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
