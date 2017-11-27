<template>
  <div>
    <button @click="increment">증가</button>
    <button @click="decrement">감소</button>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    methods: {
      increment () {
        this.$store.commit('INCREMENT')
      },
      decriment () {
        this.$store.commit('DECREMENT')
      }
    }
  }
</script>
