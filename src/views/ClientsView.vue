
<script setup lang="ts">
  import AddClient from "@/components/clients/AddClient.vue"
  import ClientsLists from "@/components/clients/ClienstLists.vue"
  import ClientInfo from "@/components/clients/ClientInfo.vue"
</script>

<template>
  <div id="clients">
    <!-- <div class="head">
      <h1>Clients</h1>
    </div> --> 

    <AddClient/>
    <ClientsLists/>
  
  </div>
</template>



<style scoped>
 
</style>
