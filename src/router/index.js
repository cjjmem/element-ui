import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const User = {
  name:'user'
}


export default new Router({
  routes: [
    { path: '/user/:id', component: User }
  ]
})

