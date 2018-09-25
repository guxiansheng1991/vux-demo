import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/pages/home/Home';
import Brand from '@/pages/brand/Brand';
import Shoppingcart from '@/pages/shoppingcart/Shoppingcart';
import Mine from '@/pages/mine/Mine';
import ProductDetail from '@/pages/product/ProductDetail.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Brand',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/Shoppingcart',
      name: 'Shoppingcart',
      component: Shoppingcart
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
