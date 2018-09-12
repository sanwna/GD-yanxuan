import Vue from 'vue'
import Router from 'vue-router'
import Home from '../compent/Home.vue'
import Category from '../compent/Category.vue'
import Foodwu from '../compent/Foodwu.vue'
import Person from '../compent/Person.vue'
import ShopCar from '../compent/ShopCar.vue'
import Login from '../compent/Login.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/foodwu',
      component:Foodwu
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'/shopcar',
      component:ShopCar
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/persons'
    }
  ]
})
