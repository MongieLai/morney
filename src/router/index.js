import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'

Vue.use(VueRouter)

const routes= [
  {
    path: '/',
    redirect: '/money',
    component: Money
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '*',
    component: () => import('@/components/NotFind.vue')
    //函数方式使用
  }
]

const router = new VueRouter({
  routes
})

export default router