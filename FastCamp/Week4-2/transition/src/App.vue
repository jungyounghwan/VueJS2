<template>
  <div id="app">
    <div class="container">
      <ul class="nav nav-tabs">
        <li @click="currentView = 'home'">
          <a href="#">Home</a>
        </li>
        <li @click="currentView = 'profile'">
          <a href="#">Profile</a>
        </li>
        <li @click="currentView = 'messages'">
          <a href="#">Messages</a>
          </li>
      </ul>

      <transition name="fade" mode="out-in">
        <component :is="currentView"></component>
      </transition>
    </div>
  </div>
</template>

<script>
  import Home from '@/components/Home'
  import Profile from '@/components/Profile'
  import Messages from '@/components/Messages'
  import { createdMixin, mountedMixin } from '@/util/mixins'

export default {
  name: 'app',
  data () {
    return {
      currentView: 'home'
    }
  },
  components: {
    Home,
    Profile,
    Messages
  },
  mixins: [ createdMixin, mountedMixin]
}
</script>

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
