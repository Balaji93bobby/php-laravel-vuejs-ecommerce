import Vue from "vue";
import Vuex from 'vuex';

import Categories from './modules/categories/categories'
import Preloader from './modules/preloader/preloader'
import Products from "./modules/products/products"
import Cart from "./modules/cart/cart"

Vue.use(Vuex)

const store = new Vuex.Store({
   modules: {
        categories: Categories,
        products: Products,
        preloader: Preloader,
       cart: Cart,
   }
});

export default store
