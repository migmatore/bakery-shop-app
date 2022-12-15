<template>
    <div class="catalog">
        <div v-for="product in products" class="cards">
            <Card :title="product.name" :image="product.image" :price="product.price"/>
        </div>
    </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Card from "../components/Card.vue";

import ProductsService from "../services/ProductsService";
import {GetProducts} from "../types/Products";

interface p {
    name: string,
    price: number,
    image?: string,
}

export default defineComponent({
    name: "Catalog",
    components: {
        Card
    },
    data() {
        return {
            products: [] as p[]
        }
    },
    mounted() {
        this.products = [
            {
                name: "Шоколадные кексы",
                price: 123,
                image: "https://img3.fonwall.ru/o/wi/berry-sweet-food-produce.jpeg?route=mid&h=750"
            },
            {
                name: "Круассан",
                price: 123,
                image: "https://img3.fonwall.ru/o/bf/coffee-morning-glass-dish.jpeg?route=mid&h=750"
            },
            {
                name: "Шоколадные кексы",
                price: 123,
                image: "https://img3.fonwall.ru/o/wi/berry-sweet-food-produce.jpeg?route=mid&h=750"
            },
            {
                name: "Круассан",
                price: 123,
                image: "https://img3.fonwall.ru/o/bf/coffee-morning-glass-dish.jpeg?route=mid&h=750"
            },
            {
                name: "Шоколадные кексы",
                price: 123,
                image: "https://img3.fonwall.ru/o/wi/berry-sweet-food-produce.jpeg?route=mid&h=750"
            },
            {
                name: "Круассан",
                price: 123,
                image: "https://img3.fonwall.ru/o/bf/coffee-morning-glass-dish.jpeg?route=mid&h=750"
            },
        ];

        ProductsService.getAll().then((response) => {
            console.log(response.data)

            // this.products = response.data;
        })
    }
})
</script>

<style>
.catalog {
    display: grid;
    /* align-content: center;
    flex-wrap: wrap; */
    /* width: 100%; */
    padding: 10px;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}


</style>