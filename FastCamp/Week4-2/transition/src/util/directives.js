export default (Vue) => { // Vue 를 정의하지 않고 사용가능 => import Vue from 'Vue'
  Vue.directive('focus', {
    inserted (el) {
      el.focus()
    }
  })

  Vue.directive('counter', {
    inserted (el) {
      let value = el.innerHTML
      let displayValue = 0

      let interval = setInterval(() => {
        if (displayValue != value) {
          let change = (value - displayValue) /10
          change = change >= 0 ? Math.ceil(change) : Math.floor(change)
          displayValue = displayValue + change
          el.innerHTML = displayValue
        } else {
          clearInterval(interval)
        }
      }, 20)
    }
  })
}
