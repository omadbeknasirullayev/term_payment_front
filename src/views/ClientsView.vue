
<script setup lang="ts">
  import AddClient from "../components/clients/AddClient.vue"
  const clients = [
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
    ]
</script>

<template>
  <div id="clients">
    <div class="head">
      <h1>Clients</h1>
    </div>

    <!-- <AddClient/> -->

    <ul class="client content_container">
      <div class="client-item head" >
        <p > T/R </p>
        <p> Passport seriya</p>
        <p > Ismi </p>
        <p > Telefon raqami </p>
      </div>

      <li class="client-item" v-for="(client, index) in clients" :key="index">
        <p class="client-item-content"> {{index + 1}} </p>
        <p class="client-item-content"> {{client.seriy}} </p>
        <p class="client-item-content"> {{client.name}} </p>
        <p class="client-item-content"> {{client.phone}} </p>
      </li>
    </ul>
  </div>
</template>



<style scoped>
  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .client {
    background: #FFF;
    box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.25);
  }

  .client-item {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    line-height: 1.5rem;
  }

  .client-item:nth-child(2n - 1) {
    background: rgba(0, 28, 175, 0.10);


  }

  .client-item.head {
    background-color: #2F49D1;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .client-item.head p {
    font-weight: bold;
    /* width: 10rem; */
  }

  .client-item-content {
    text-align: center;
  }
</style>
