import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ './views/Home')
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import(/* webpackChunkName: "Category" */ './views/Category')
    },
    {
      path: '/group',
      name: 'Group',
      component: () => import(/* webpackChunkName: "Group" */ './views/Group')
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: () => import(/* webpackChunkName: "ShopCart" */ './views/ShopCart')
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import(/* webpackChunkName: "Mine" */ './views/Mine')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "About" */ './views/About')
    }
  ]
})
