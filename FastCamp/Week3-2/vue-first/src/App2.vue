<template>
  <div id="app">
    <button @click="fetchPosts">불러오기</button>
    <ul>
      <li v-for="post in posts">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    fetchPosts () {
      this.axios.get('http://jsonplaceholder.typicode.com/posts', {
        params: {
          userId: 1
        }
      }).then((response) => {
        this.posts = response.data
      })
    }
  }
}
</script>

<style lang="scss">
ul {
  li {
    h1 {
      font-size: 20pt;
      color: red;
    }
    p {
      font-size: 10pt;
      color: blue;
    }
  }
}
</style>
