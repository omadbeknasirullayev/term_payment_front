<script setup lang="ts">

  import AppLabelInput from "@/shared/inputs/AppLabelInput.vue"
  import {useLabelInfo} from "../../stores/products"

  import {ref} from 'vue'
  const is_add_feature = ref(true)
  const label_info = useLabelInfo()
  // const useLabelInfo = useLabelInfo()
  // const label = label_info.label
  console.log(label_info);  
  

  // const label_info = [
  //   {
  //     label_name: "Maxsulot nomi",
  //     type: "text",
  //     placeholder: "Maxsulot nomi",
  //     id: "name",
  //     name: "name",
  //     requied: true
  //   },
  //   {
  //     label_name: "Maxsulot narxi",
  //     type: "text",
  //     placeholder: "Maxsulot narxi",
  //     id: "price",
  //     name: "price",
  //     requied: true
  //   },
  //   {
  //     label_name: "Maxsulot soni",
  //     type: "text",
  //     placeholder: "Maxsulot soni",
  //     id: "count",
  //     name: "count",
  //     requied: true
  //   },

  // ]

  const change_is_add_feature = () => {
    is_add_feature.value = false
  }

</script>

<template>
  <div class="content_container">
    <template v-if="is_add_feature">

      <p class="add-product-title">Product qo'shish</p>
{{label_info.count}}
      <AppLabelInput 
        :label_name="d" 
        :placeholder="`salom`"
      > </AppLabelInput>

      <form action="#" method="POST">
        <div class="add-product-inputs">

          <AppLabelInput 
            v-for="(item, index) of label_info" :key="index"
            :type="item.type"
            :name="item.name"
            :placeholder="item.placeholder"
            :label_name="item.label_name"
            :value="item.value"
          />

          <!-- <label for="name" class="add-product-label">

            <span>Maxsulot nomi</span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Maxsulot nomi"
                required
              />

          </label>

        <label for="price" class="add-product-label">

          <span>Maxsulot narxi</span>
          <input type="text" name="price" id="peice" placeholder="Maxsulot narxi" required />

        </label>

        <label for="count" class="add-product-label">

          <span>Maxsulot nechtaligi</span>
          <input
            type="tel"
            name="count"
            id="count"
            placeholder="Maxsulot soni"
            required
          />

        </label>

        <label for="client_address" class="add-product-label">

          <span>Qo'shimcha ma'lumotlar qo'shish</span>
          <input type="button" class="add-feature-btn" value="OK" @click="change_is_add_feature">

        </label> -->


      </div>
        <button type="submit" class="add-product-btn">Qo'shish</button>
    </form>
  </template>

  <template v-else>
      <div class="add-feature-product">
        <div class="feature">
          salom
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
  width: 40rem;
  background-color: aqua;
}


.add-feature-btn {
  cursor: pointer;

}
</style>