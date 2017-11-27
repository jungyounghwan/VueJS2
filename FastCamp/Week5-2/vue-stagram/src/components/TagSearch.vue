<template>
  <div>
    <md-input-container>
      <label>태그 검색</label>
      <md-input @input.native="tagName = $event.target.value" @keydown.native.enter="search"></md-input>
    </md-input-container>

    <template v-if="!isLoading">
      <feed v-for="feed in feeds" :key="feed.id"
            v-if="feed.caption"
            :image-url="feed.images.standard_resolution.url"
            :full-name="feed.caption.from.full_name"
            :username="feed.caption.from.username"
            :contents="feed.caption.text">
        <md-card-media>
          <img :src="feed.images.standard_resolution.url">
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{ feed.caption.from.full_name }}</div>
          <div class="md-subhead">@{{ feed.caption.from.username }}</div>
        </md-card-header>

        <md-card-content>
          {{ feed.caption.text }}
        </md-card-content>
      </feed>
    </template>
  </div>
</template>

<script>
  import  jsonp from 'jsonp'
  import Feed from "./Feed.vue";

  export default {
    components: {Feed},
    name: 'TagSearch',
    data () {
      return {
        tagName: '',
        feeds: []
      }
    },
    methods: {
      search (){
        if (this.tagName === '') {
          return
        }
        const token = localStorage.getItem('token')
        this.isLoading = true
        jsonp(`https://api.instagram.com/v1/tags/${this.tagName}/media/recent?access_token=${token}`, null, (_, response) => {
          this.isLoading = false
          this.feeds = response.data
          console.log(response.data)
        })
      }
    }
  }
</script>
