import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: () => import('../views/HomeView.vue')
//   },
//   {
//     path: '/news',
//     name: 'news',
//     component: () => import('../views/NewsView.vue')
//   },
//   {
//     path:'/activity',
//     name:'activity',
//     component: ()=> import('../views/ActivityView.vue')
//   },
//   {
//     path:'/login',
//     name:'login',
//     component: ()=> import('../views/LoginView.vue')
//   }
// ]

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'main',
    component: () => import('../components/MainView.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/NewsView.vue')
      },
      {
        path: 'activity',
        name: 'activity',
        component: () => import('../views/ActivityView.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
      }
    ]
  },



]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
