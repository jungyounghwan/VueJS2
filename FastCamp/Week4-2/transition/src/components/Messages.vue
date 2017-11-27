<template>
  <div>
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <button @click="shuffle">Shuffle</button>
    <transition-group name="list" tag="ul">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'Massages',
    data () {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        nextNumber: 11
      }
    },
    methods: {
      add () {
        /*let random = Math.floor(Math.random() * 100)
        this.items.push(random)*/
        this.items.push(this.nextNumber)
        this.nextNumber += 1
      },
      remove () {
        let index = Math.floor(Math.random() * this.items.length)
        this.items.splice(index, 1)
      },
      shuffle () {
        /* global _ */
        this.items = _.shuffle(this.items)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list-enter-active, .list-leave-active {
    transition: all .5s;
  }
  .list-enter, list-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }
  .list-move {
    transition: transform 1s;
  }
</style>
