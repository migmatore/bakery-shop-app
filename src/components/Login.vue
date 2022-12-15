<template>
    <div class="login">
        <form action="">
            <div class="form">
                <input type="text" placeholder="Login" class="input">
                <input type="password" placeholder="Password" class="input">
                <router-link to="/">Dont't have an account yet? Sign up</router-link>
                <button class="login-btn">Log in</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Login'
})
</script>

<style>
.login {
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
    color: #242424;
}

.input:focus {
    border: 2px solid #d6d2cf;
}

.login-btn {
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
    color: #242424;
    /* margin-bottom: 15px; */
}

.login-btn:hover {
    /* border: 2px solid #d6d2cf; */
    background-color: #faca64;
    border: 1px solid #fac450;
    border-radius: 12px;
    box-shadow: 0px 5px 20px -2px #fac450;
    color: #b17901;
    cursor: pointer;
}

.login-btn:focus {
    /* border: 2px solid #d6d2cf; */
    background-color: #faca64;
    border: 1px solid #fac450;
    border-radius: 12px;
    box-shadow: 0px 5px 20px -2px #fac450;
    color: #b17901;
    cursor: pointer;
}

a {
    text-decoration: none;
    color: #242424;
    margin-bottom: 15px;
}

</style>