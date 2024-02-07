<script setup lang="ts" >
import { defineProps } from "vue";

    
    const props = defineProps({
        label_name: {type: String},
        type: {type: String},
        id: String,
        name: String,
        placeholder: String,
        required: Boolean,
        value: String
    }) 

</script>


<template>

    <label :for="props.name" class="add-product-label">

        <span>{{props.label_name}}</span>
        <input
            :type="props.type"
            :name="props.name"
            :id="props.id"
            :placeholder="props.placeholder"
            :required="props.required"
            :value="props.value"
        />

    </label>
    
</template>

<style scoped>
    .add-product-label {
  margin-top: 1rem;
  margin-right: 5rem;
  display: flex;
  flex-flow: column;
}

/* .add-product-label:nth-child(3) {
  margin-right: 0;
} */

.add-product-label span {   
  margin-bottom: 0.5rem;
}

.add-product-label input {
  width: 320px;
  height: 2rem;
  line-height: 1rem;
  border-radius: 4px;
  border: 1px solid #0061f7;
  outline: #0061f7;
}
</style>