import Vue from 'vue'
import Vuex from 'vuex' // Vuex对象的入口文件 ==> src/index.js。其内部依次构建Vuex的实现逻辑。
import cart from './modules/cart'
import products from './modules/products'
import createLogger from '../../../src/plugins/logger'

console.log('%c shopping-cart Vuex', 'color: #03A9F4; font-weight: bold', Vuex)

/**
 * @description: Vue.use()方法。是Vue插件的核心方法。
 * @param {*}
 * @return {*}
 */
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
