import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import admin from './views/admin.vue'
import user from './views/user.vue'
import userlist from './views/userlist.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[{
        path:''
      }],
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      children:[{
        path:'user',
        component:user,
      },
      {
        path: 'userlist',
        name: 'userlist',
        component: userlist,
      },
    ]
    },
  ]
})
