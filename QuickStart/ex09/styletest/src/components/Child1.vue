<template>
  <div class="main test">
    {{ msg }}
    <child11></child11>
  </div>
</template>

<script type="text/javascript">
  import Child11 from "./Child11.vue";

  export default {
    components: {Child11},
    name: 'child1',
    data () {
      return {
        msg: 'Child1'
      }
    }
  }
</script>

<style scoped>
  .main {border:1px solid black;background-color:yellow}
  .test {padding:10px;text-decoration:underline;border:1px solid black}
</style>
