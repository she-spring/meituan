import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Found from '../pages/Found/Found'
import Order from '../pages/Order/Order'
import My from '../pages/My/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
