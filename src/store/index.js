import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

import cartModule from './modules/cart.js'

export default new Vuex.Store({
    state:{
        msg1:1
    },
    modules:{
        cartModule
    }
});