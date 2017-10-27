import home from './home'
import project1 from './project1'
import alert from './alert'

const state = {
  items: [
    home,
    project1,
    alert
  ]
}

const getters = {
  menus: state => state.items
}

export default {
  state,
  getters
}
