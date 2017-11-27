<template>
  <Top-title></Top-title>
  <div id="app">
    <input v-model="inputTodo" type="text">
    <button @click="addTodo">Click!!</button>
    <ul>
      <li v-for="(todo, index) in todos">{{ todo }} <button @click="delTodo(index)">Del!!</button></li>
    </ul>
  </div>
</template>

<script>
  import TodoList from "@/stories/Todo";
  import Title from "@/components/Title";

  export default {
    name: 'Todo',
    data: function () {
      return {
        todos: [],
        inputTodo: ''
      }
    },

    component: {
      TodoList,
      Title
    },
    methods: {
      addTodo: function () {
        this.todos.push(this.inputTodo);
        this.inputTodo = '';
      },
      delTodo: function (index) {
        this.todos.splice(index, 1)
      }
    }
  }
</script>

<style scoped>
  ul li {overflow:hidden;}
  ul li p, ul li button {display:inline-block; float:left;}
</style>
