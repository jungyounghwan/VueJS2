<template>
  <aside class="menu app-sidebar">
    <p class="menu-label">메뉴</p>
    <ul class="menu-list">
      <li v-for="item in menus">
        <router-link :to="item.path" :exact="true">{{ item.meta.label }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
  import  { mapGetters } from 'vuex'
  export default {
    name: 'Sidebar',
    computed: mapGetters({
      menus: 'menus'
    })
  }
</script>

<style lang="scss">
  .app-sidebar {
    position: fixed;
    top: 52px;
    left: 0;
    bottom: 0;
    padding: 20px 0 50px;
    width: 180px;
    max-height: 100vh;
    z-index:1023;
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    overflow: auto;
    .menu-label {
      padding-left: 10px;
    }
  }
</style>
