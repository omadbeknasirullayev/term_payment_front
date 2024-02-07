<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Layout from "./layouts/default.vue";
</script>

<template>
  <main class="main">
    <Layout> </Layout>
  </main>
</template>

<style scoped>
.main {
  display: flex;
}
</style>
