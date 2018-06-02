// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Users from './components/Users'
import MyComponent from './components/MyComponent'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: MyComponent },
    { path: '/my-component', component: MyComponent },
    { path: '/users', component: Users }
  ],
  mode: 'history',
  base: __dirname
})

const app = new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">MyComponent</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
