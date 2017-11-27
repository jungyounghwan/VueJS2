import Vue from 'vue'
import Router from 'vue-router'
//import  Home from '@/views/home'
import menusModule from '@/store/modules/menus'

Vue.use(Router)

const generateRoutes = (menus) => {
  let routes = []

  menus.forEach((menu) => {
    //console.log(menu)
    if (menu.path) {
      routes.push(menu)
    }
  })
  return routes
}

export default new Router({
  routes: [
      ...generateRoutes(menusModule.state.items)
    ]
})
