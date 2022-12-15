<template>
    <div>
        <Sidebar/>
        <section class="main-section">
            <MainTitlebar/>
            <main class="main-content">
                <Catalog/>
            </main>
        </section>
    </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Sidebar from "../components/Sidebar.vue";
import MainTitlebar from "../components/MainTitlebar.vue";
import Catalog from "../components/Catalog.vue";

export default defineComponent({
    name: "MainPage",
    components: {Catalog, MainTitlebar, Sidebar}
})
</script>

<style scoped>
.main-section {
    position: relative;
    left: 200px;
    /* min-height: 100vh; */
    width: calc(100% - 200px);
    padding: 0;
    height: 100%;
}

.main-section .main-content {
    overflow-y: auto;
    height: calc(100vh - 56px);
    margin-top: 56px;
    margin-right: 0;
    padding-right: 0;
    padding-top: 15px;
    /* display: flex;
    justify-content: center;
    align-items: flex-start; */
    /* padding-top: 50px; */
}

::-webkit-scrollbar {
    width: 10px;
    /* background: #6F6F6F; */
}

::-webkit-scrollbar-thumb {
    background-color: #ddd8d4;
    border-radius: 10px;
}
</style>