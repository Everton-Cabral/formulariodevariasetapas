import { createRouter, createWebHistory } from 'vue-router'
import step1 from './components/formPersonalInfo/AppFormPersonalInfo'
import step2 from './components/selectplan/AppSelectPlan'



const routes = [
  {
    path: '/step1',
    component: step1
  },
  {
    path: '/step2',
    component: step2
  },


 { path: '/',
  redirect:'/step1'}
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
