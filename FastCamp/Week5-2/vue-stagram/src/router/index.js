import Vue from 'vue'
import Router from 'vue-router'
import MyInfo from '@/components/MyInfo'
import Login from '@/components/Login'
import MyFeed from '@/components/MyFeed'
import TagSearch from '@/components/TagSearch'

Vue.use(Router)

const router = new Router ({
  mode: 'history',
  routes: [
    {
      path: '/VueJS2/tree/gh-pages/FastCamp/Week5-1/vue-stagram/',
      redirect: '/VueJS2/tree/gh-pages/FastCamp/Week5-1/vue-stagram/me'
    },
    {
      path: '/VueJS2/tree/gh-pages/FastCamp/Week5-1/vue-stagram/me',
      name: 'MyInfo',
      component: MyInfo
    },
    {
      path: '/VueJS2/tree/gh-pages/FastCamp/Week5-1/vue-stagram/feeds',
      name: 'MyFeed',
      component: MyFeed
    },
    {
      path: '/VueJS2/tree/gh-pages/FastCamp/Week5-1/vue-stagram/search',
      name: 'TagSearch',
      component: TagSearch
    },
    {
      path: '/VueJS2/tree/gh-pages/FastCamp/Week5-1/vue-stagram/Login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'Login' && token === null){
    if (to.hash.includes('#access_token')) {
      const tokenHash = to.hash
      const tokenValue = tokenHash.split('=')[1]
      localStorage.setItem('token', tokenValue)
      next('/me')
      return
    }
    next('/login')
  }
  next()
})

export default router

