<script setup lang="ts">
import AppLabelInput from "@/shared/inputs/AppLabelInput.vue";
import { useProductsState } from "../../stores/products";
import Button from "@/shared/buttons/button.vue";

import { ref } from "vue";
const is_add_feature = ref(true);
const productState = useProductsState();

const change_is_add_feature = () => {
  is_add_feature.value = is_add_feature.value ? false : true;
};

const add_feature_input = (e) => {
  e.preventDefault()
  const len = productState.feature_label.length
  productState.feature_label.push([
    {
      label_name: `Key${len}`,
      type: "text",
      placeholder: `Key${len}`,
      id: `key${len}`,
      name: `key${len}`,
      requied: true
    },
    {
      label_name: `Value${len}`,
      type: "text",
      placeholder: `Value${len}`,
      id: `value${len}`,
      name: `value${len}`,
      requied: true
    }
  ]);
};

const delete_feature_input = () => {
  
  productState.feature_label = productState.feature_label.splice(0, 1)
}



</script>

<template>
  <div class="content_container">
    <template v-if="is_add_feature">
      <p class="add-product-title">Product qo'shish</p>

      <form action="#" method="POST">
        <div class="add-product-inputs">
          <AppLabelInput
            v-for="(item, index) of productState.labels"
            :key="index"
            :type="item.type"
            :name="item.name"
            :placeholder="item.placeholder"
            :label_name="item.label_name"
            :value="item.value"
          />

          <label for="client_address" class="add-product-label">
            <span>Qo'shimcha ma'lumotlar qo'shish</span>
            <input type="button" class="add-feature-btn" value="OK" @click="change_is_add_feature" />
          </label>
        </div>
        <button type="submit" class="add-product-btn">Qo'shish</button>
      </form>
    </template>

    <template v-else>
      <div class="add-feature-product">
        <div class="feature">
          <form action="#">
            <div
              class="feature-form-item"
              v-for="(item, index) of productState.feature_label"
              :key="index"
            >

              <AppLabelInput
                class="feature-input"
                :type="item[0].type"
                :name="item[0].name"
                :placeholder="item[0].placeholder"
                :label_name="item[0].label_name"
                :value="item[0].value"
              />
              <AppLabelInput
                class="feature_input"
                :type="item[1].type"
                :name="item[1].name"
                :placeholder="item[1].placeholder"
                :label_name="item[1].label_name"
                :value="item[1].value"
              />

            </div>
          </form>

          <div class="feature-btns">
            <Button @click="add_feature_input" :name="'Add'" class="add-feature-back-btn"></Button>
            <Button @click="delete_feature_input" :name="'Delete'" class="add-feature-back-btn"></Button>
            <Button @click="change_is_add_feature" :name="'Back'" class="add-feature-back-btn"></Button>
          </div>
        
        </div>
      </div>
    </template>
  </div>
</template>



<style scoped>
.content_container {
}

.add-product-title {
  color: #0061f7;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
}

.add-product-inputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  font-size: 20px;
}

.add-product-label {
  margin-top: 1rem;
  margin-right: 5rem;
  display: flex;
  flex-flow: column;
}

.add-product-label:nth-child(3) {
  margin-right: 0;
}

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

.add-product-btn {
  margin-top: 2.5rem;
  width: 300px;
  line-height: 1rem;
  height: 2.5rem;
  color: #fff;
  font-weight: bold;
  background-color: #0061f7;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.add-feature-product {
  width: 70rem;
  margin: 0 auto;
  background-color: aqua;
}

.add-feature-btn {
  cursor: pointer;
}

.feature-input {
  
}

.feature-form-item {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.add-feature-back-btn {
  width: 5rem;
  margin-top: 1rem;
}

.feature-btns {
  margin-top: 2rem;
  padding: 0 5rem;
}

.feature-btns button {
  margin-right: 2rem;
}
</style>