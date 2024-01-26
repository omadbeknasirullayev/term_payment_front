<script lang="ts" setup>

     const clients = [
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
      {seriy: "Ab3679272", name: "ali", phone: '998902234', },
    ]
</script>

<template>
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
</template>


<style scoped>


  .client {
    margin-top: 5rem;
    background: #FFF;
    box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.25);
  }

  .client-item {
    padding: 0.6rem;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    letter-spacing: 1px;
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
    width: 10rem;
  }

  .client-item-content {
    width: 10rem;
  }

  
</style>