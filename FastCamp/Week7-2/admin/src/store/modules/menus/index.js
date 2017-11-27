import home from './home'
import test from './test'

const state = {
  items: [
    home,
    test
  ]
}

const getters = {
  menus: state => state.items
}

export default {
  state,
  getters
}
