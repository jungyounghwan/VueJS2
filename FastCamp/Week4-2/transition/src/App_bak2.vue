<template>
  <div id="app">
    <button @click="show01 = !show01">
      fade
    </button>
    <button @click="show02 = !show02">
      slide-fade
    </button>
    <button @click="show03 = !show03">
      bounce
    </button>
    <transition name="fade">
      <div v-if="show01">Hello, Vue.js</div>
    </transition>
    <transition name="slide-fade">
      <div v-if="show02">Hello, Vue.js</div>
    </transition>
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" :duration="2000">
      <div v-if="show03">Hello, Vue.js</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show01: false,
      show02: false,
      show03: false
    }
  }
}
</script>

<style lang="scss">
  #app {
    padding: 200px;
  }
</style>
