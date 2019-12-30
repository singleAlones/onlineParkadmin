import Vue from 'vue'
import VueRouter from 'vue-router'
 

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/index',
    name: 'index',
    component: () => import( '../components/index.vue'),
  },
  {
    path: '/headers',
    name: 'headers',
    component: () => import( '../views/headers.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../components/login.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import( '../views/user.vue')
  },
  {
    path: '/iadduser',
    name: 'iadduser',
    component: () => import( '../components/iadduser.vue')
  } ,
  {
    path: '/iaddadmin',
    name: 'iaddadmin',
    component: () => import( '../components/iaddadmin.vue')
  } ,
  {
    path: '/iadmin',
    name: 'iadmin',
    component: () => import( '../components/iadmin.vue')
  } 
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
