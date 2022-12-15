<template>
    <div class="create-store">
        <Titlebar/>
        <div class="create-store-wrapper">
            <form @submit.prevent>
                <div class="form">
                    <input type="text" v-model="firstName" placeholder="Store name" class="input">
                    <p>Store admin:</p>
                    <input type="text" v-model="firstName" placeholder="First name" class="input">
                    <input type="text" v-model="lastName" placeholder="Last name" class="input">
                    <input type="text" v-model="email" placeholder="Email" class="input">
                    <input type="text" v-model="phoneNumber" placeholder="Phone number" class="input">
                    <input type="password" v-model="password" placeholder="Password" class="input">
                    <button class="create-btn" @click="create">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Titlebar from "../components/Titlebar.vue";

export default defineComponent({
    name: "CreateStorePage",
    components: {Titlebar},
    data() {
        return {
            name: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
        }
    },
    methods: {
        create() {

        }
    }
})
</script>

<style scoped>
.create-store {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #f5f3f0;
    display: flex;
    flex-direction: column;
}

.create-store-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    background-color: #f3efea;
    /* box-shadow: 0px 5px 10px 2px #c4c4c433; */
    border: 1px solid #e6e3e0;
    border-radius: 12px;
}

.form p {
    margin-bottom: 15px;
    color: #5b5b5b;
}

.input {
    background-color: #eee7df;
    /* box-shadow: 0px 5px 10px 2px #c4c4c433; */
    border: 2px solid #e6e3e0;
    /* border: 2px solid #d6d2cf; */
    border-radius: 12px;
    padding: 10px;
    margin-bottom: 15px;
    outline: none;
    font-size: 18px;
    color: #5b5b5b;
}

.input:focus {
    border: 2px solid #d6d2cf;
}

.create-btn {
    /* background-color: #eee7df;
    outline: none;
    border: 2px solid #e6e3e0;
    font-size: 18px;
    padding: 8px;
    border-radius: 12px;
    color: #242424;
    margin-bottom: 15px; */
    transition: all 0.4s ease;
    border: 1px solid #ddd8d4;
    border-radius: 12px;
    background-color: #f3efea;
    padding: 8px;
    font-size: 18px;
    outline: none;
    color: #5b5b5b;
    /* margin-bottom: 15px; */
}

.create-btn:hover {
    /* border: 2px solid #d6d2cf; */
    background-color: #faca64;
    border: 1px solid #fac450;
    border-radius: 12px;
    box-shadow: 0px 5px 20px -2px #fac450;
    color: #b17901;
    cursor: pointer;
}

.create-btn:focus {
    /* border: 2px solid #d6d2cf; */
    background-color: #faca64;
    border: 1px solid #fac450;
    border-radius: 12px;
    box-shadow: 0px 5px 20px -2px #fac450;
    color: #b17901;
    cursor: pointer;
}

.form a {
    text-decoration: none;
    color: #5b5b5b;
    margin-bottom: 15px;
}
</style>