<template>
  <section class="app-main">
    <div class="container is-fluid is-marginless app-content">
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AppContent'
  }
</script>

<style lang="scss">
  .app-main {
    padding-top: 52px;
    margin-left: 180px;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transition: opacity 0.5s;
  }
  .fade-enter-to, fade-leave {
    opacity: 1;
  }
</style>
