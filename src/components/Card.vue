<template>
    <div class="card">
        <div class="card-image">
            <img :src="image"/>
        </div>
        <div class="card-body">
            <div class="card-title">{{ title }}</div>
            <div class="card-desc">{{ description }}</div>
        </div>
        <div class="card-footer">
            <div class="quantity">
                <div class="buy-minus" @click="dec()">
                    <i class="uil uil-minus"></i>
                </div>
                <div id="quantity">
                    {{ quantity }}
                </div>
                <div class="buy-plus" @click="inc()">
                    <i class="uil uil-plus"></i>
                </div>
            </div>
            <div class="buy">
                <div class="card-price">{{ price }}₽</div>
                <div class="card-cart">
                    <i class="uil uil-shopping-basket"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Card',
    props: {
        image: String,
        title: String,
        description: String,
        price: Number,
        // quantity: {
        //     type: Number,
        //     default: 0,
        // },
    },
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        inc() {
            this.quantity++;
        },
        dec() {
            if (this.quantity != 0) {
                this.quantity--;
            }
        }
    }
})
</script>

<style>
.card {
    flex-basis: 250px;
    /* border: 1px solid silver; */
    /* margin: 15px; */
    margin-top: 0;
    padding: 15px;
    background-color: #f3efea;
    /* box-shadow: 0px 5px 10px 2px #c4c4c433; */
    border: 1px solid #e6e3e0;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.4s ease;
}

.card:hover {
    box-shadow: 0px 5px 20px -2px #e4e0da;
    cursor: pointer;
}


.card .card-image {
    padding: 5px;
}

.card .card-image img {
    width: 280px;
    height: 160px;
    border-radius: 12px;
}

.card .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
}

.card-body .card-title {
    font-size: 21px;
    font-weight: bold;
    padding-bottom: 10px;
    color: #242424;
}

.card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    width: 100%;
}

.card-footer .card-cart {
    transition: all 0.4s ease;
    border: 1px solid #ddd8d4;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
}

.card-footer .card-cart:hover {
    background-color: #faca64;
    border: 1px solid #fac450;
    border-radius: 12px;
    box-shadow: 0px 5px 20px -2px #fac450;
    color: #b17901;
    cursor: pointer;
}

.card-footer .card-cart i {
    font-size: 22px;
    color: #5b5b5b;
}

.card-footer .card-price {
    align-self: center;
    font-size: 20px;
    color: #5b5b5b;
}

.card-footer .quantity {
    display: flex;
    flex-direction: row;
    /* border: 1px solid #ddd8d4;
    border-radius: 12px; */
    height: 40px;
    justify-content: center;
    align-items: center;
    color: #5b5b5b;
}

.card-footer .quantity #quantity {
    padding: 0 10px;
    cursor: default;
    border-top: 1px solid #ddd8d4;
    border-bottom: 1px solid #ddd8d4;
    height: 40px;
    display: flex;
    align-items: center;
}

.card-footer .quantity .buy-minus {
    border: 1px solid #ddd8d4;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    transition: all 0.4s ease;
    border-radius: 12px 0 0 12px;
}

.card-footer .quantity .buy-minus:hover {
    background-color: #faca64;
    border: 1px solid #faca64;
    box-shadow: 5px 0px 20px -2px #fac450;
    border-radius: 12px 0 0 12px;
    color: #b17901;
}

.card-footer .quantity .buy-plus {
    border: 1px solid #ddd8d4;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    transition: all 0.4s ease;
    border-radius: 0 12px 12px 0;
}

.card-footer .quantity .buy-plus:hover {
    background-color: #faca64;
    border: 1px solid #faca64;
    box-shadow: -5px 0px 20px -2px #fac450;
    border-radius: 0 12px 12px 0;
    color: #b17901;
}


.card-footer .buy {
    display: flex;
    flex-direction: row;
}
</style>