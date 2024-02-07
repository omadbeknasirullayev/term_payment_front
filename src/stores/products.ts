import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsState = defineStore('useLabelInfo', () => {

    state: {
        return {
            labels: [
                {
                    label_name: "Maxsulot nomi",
                    type: "text",
                    placeholder: "Maxsulot nomi",
                    id: "name",
                    name: "name",
                    requied: true
                },
                {
                    label_name: "Maxsulot narxi",
                    type: "text",
                    placeholder: "Maxsulot narxi",
                    id: "price",
                    name: "price",
                    requied: true
                },
                {
                    label_name: "Maxsulot soni",
                    type: "text",
                    placeholder: "Maxsulot soni",
                    id: "count",
                    name: "count",
                    requied: true
                },
            ],
            feature_label: [
                [{
                    label_name: "Key",
                    type: "text",
                    placeholder: "Key",
                    id: "key",
                    name: "key",
                    requied: true
                },
                {
                    label_name: "Value",
                    type: "text",
                    placeholder: "value",
                    id: "value",
                    name: "value",
                    requied: true
                },]
            ],
            summ: 0
        }
    }



})

