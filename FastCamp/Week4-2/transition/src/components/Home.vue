<template>
  <div>
    <div>This is Home!</div>
    <input type="text" placeholder="Input Text" v-focus>
    <span v-counter>10000</span>
  </div>
</template>

<script>
  import { createdMixin } from '@/util/mixins'
  export default {
    name: 'Home',
    mixins: [ createdMixin ],
  }
</script>

<style lang="scss">
</style>
