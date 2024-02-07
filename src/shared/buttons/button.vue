<script setup lang="ts">
import { defineProps } from "vue";

    const props = defineProps({
        name: {type: String, required : true},
        funtion: {type: String},

    })
</script>

<template>

    <button @click="props.function" class="btn">{{props.name}}</button> 
    
</template>

<style scoped>
    .btn {
        cursor: pointer;
        background-color: #0061f7;
        color: white;
        width: 10rem;
        height: 2rem;
        border-radius: 4px;
        border: none;
        font-size: 20px;
    }

    .btn:hover {
        background-color: #0063f7bc;
        border-width: 2px;
    }
</style>