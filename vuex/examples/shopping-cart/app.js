import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'  // App 就是顶层的Vue实例(组件)。内部相互引用[import](或结合路由)，生成‘树状’的Vue实例树。
import store from './store'
import { currency } from './currency'

console.log('%c shopping-cart store', 'color: #03A9F4; font-weight: bold', store)

Vue.filter('currency', currency)

const vm = new Vue({
  el: '#app',
  store,
  render: h => h(App) // Vue对象的渲染函数。将Vue实例树(模板)，解析、构建【编译】生成组件树？
})

console.log('%c shopping-cart vm', 'color: #03A9F4; font-weight: bold', vm)

console.log('vm.$store === vm.$children[0].$store', vm.$store === vm.$children[0].$store) // true
console.log('vm.$store === vm.$children[0].$children[0].$store', vm.$store === vm.$children[0].$children[0].$store) // true
console.log('vm.$store === vm.$children[0].$children[1].$store', vm.$store === vm.$children[0].$children[1].$store) // true
