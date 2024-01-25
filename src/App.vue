<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import SideBar from './components/sidebar/SideBar.vue'
</script>

<template>
  <main class="main">
    <SideBar/>
    <RouterView />
  </main>
</template>

<style scoped>
  .main {
    display: flex;
  }
</style>
