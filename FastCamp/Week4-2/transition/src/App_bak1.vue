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
    <transition name="bounce">
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
  /*
  엘리먼트가 등장할 때 순서
  .[name]-enter -> .[name]-enter-active -> .[name]-enter-to
  ///opacity: 0//////opacity: 0->1//////opacity: 1
  엘리먼트가 삭제될 때 순서
  .[name]-leave -> .[name]-leave-active -> .[name]-leave-to
  ///opacity: 1//////opacity: 1->0//////opacity: 0
  */

  #app {
    padding: 200px;
  }
  .bounce-enter-active {
    animation: bounce .5s;
  }
  .bounce-leave-active {
    animation: bounce .5 reverse;
  }
  @keyframes bounce {
    0% { transform: scale(0); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1); }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
