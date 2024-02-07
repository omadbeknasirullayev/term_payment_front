<script setup lang="ts">

    const client = {
        passport_seria: "Ab3679272", fullname: "ali", phone_number: '998902234'
    }

</script>

<template>
    <div class="content_container">
        
        <ul class="client_self_info">
            <li class="client_self_info_item">{{client.passport_seria}}</li>
            <li class="client_self_info_item">{{client.fullname}}</li>
            <li class="client_self_info_item">{{client.phone_number}}</li>
            <li class="client_self_info_item">address</li>
        </ul>

    </div>
</template>


<style scoped>
    .content_container {
        padding-top: 2rem;

    }

    .client_self_info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .client_self_info_item {
        border: 1px solid #0061f7;
        border-radius: 4px;
        word-spacing: 2px;
        line-height: 2.5rem;
        margin-bottom: 2rem;
        font-size: 1.5rem;
        width: 15rem;
        text-align: center;
    }
</style>