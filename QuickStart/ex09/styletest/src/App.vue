<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <child1></child1>
    <child2></child2>
    <module1></module1>
  </div>
</template>

<script>
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";
import Module1 from "./components/Module1.vue";

export default {
  components: {
    Module1,
    Child2,
    Child1},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
