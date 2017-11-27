<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <app-header></app-header>
    <sidebar></sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import AppHeader from "./layout/AppHeader.vue";
import Sidebar from "./layout/Sidebar.vue";
import AppContent from "./layout/AppContent.vue";
import AppFooter from "@/layout/AppFooter.vue";

export default {
  components: {
    NprogressContainer,
    AppHeader,
    Sidebar,
    AppContent,
    AppFooter
  },
  name: 'app'
}
</script>

<style>
  .nprogress-custom-parent {position:fixed;}
  .nprogress-container {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    z-index: 1025;
  }
</style>
