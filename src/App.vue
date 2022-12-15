<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Greet from "./components/Greet.vue";
import Sidebar from "./components/Sidebar.vue";
import Titlebar from "./components/MainTitlebar.vue";

export default {
    name: 'app',
    components: {
        Greet,
        Sidebar,
        Titlebar,
    }
}
</script>

<template>
<!--    <div>-->
<!--        <sidebar/>-->
<!--        <section class="main-section">-->
<!--            <Titlebar/>-->
<!--            <main class="main-content">-->
<!--                <router-view/>-->
<!--            </main>-->
<!--        </section>-->
        <router-view/>
<!--    </div>-->
</template>

<style scoped>
/*.main-section {*/
/*    position: relative;*/
/*    left: 200px;*/
/*    !* min-height: 100vh; *!*/
/*    width: calc(100% - 200px);*/
/*    padding: 0;*/
/*    height: 100%;*/
/*}*/

/*.main-section .main-content {*/
/*    overflow-y: auto;*/
/*    height: calc(100vh - 56px);*/
/*    margin-top: 56px;*/
/*    margin-right: 0;*/
/*    padding-right: 0;*/
/*    padding-top: 15px;*/
/*    !* display: flex;*/
/*    justify-content: center;*/
/*    align-items: flex-start; *!*/
/*    !* padding-top: 50px; *!*/
/*}*/

/*::-webkit-scrollbar {*/
/*    width: 10px;*/
/*    !* background: #6F6F6F; *!*/
/*}*/

/*::-webkit-scrollbar-thumb {*/
/*    background-color: #ddd8d4;*/
/*    border-radius: 10px;*/
/*}*/

</style>
