/*import Vue from 'Vue'*/

export var createdMixin = {
  created () {
    console.log(`created: ${this.$el}`)
  }
}

export var mountedMixin = {
  mounted () {
    console.log(`mounted: ${this.$el}`)
  }
}

/*
export default (Vue) => {
  Vue.mixin({
    created () {
      this.alertMessage('Hellove Vue.js!')
    },
    methods: {
      alertMessage (message) {
        alert(message)
      }
    }
  })
}*/
