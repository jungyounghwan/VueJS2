<template>
  <div>
    <button @click="increment">시간증가</button>
  </div>
</template>

<script>
  export default {
    name: 'AsyncCounter',
    methods: {
      increment () {
        this.$store.dispatch('asyncIncrement')
        // store의 asyncIncrement 는
      }
    }
  }
</script>
