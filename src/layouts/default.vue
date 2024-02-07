<script setup lang="ts">
    import Sidebar from "../components/sidebar/SideBar.vue"
</script>

<template>
    <div class="layout">
        <Sidebar/>
        <RouterView />
    </div>
</template>


<style scoped>
    .layout {
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>