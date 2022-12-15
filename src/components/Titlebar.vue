<template>
    <div data-tauri-drag-region class="titlebar">
        <div class="titlebar-button">
            <div class="button">
                <router-link to="/">
                    <i class="uil uil-arrow-left"></i>
                </router-link>
            </div>
        </div>
        <div class="titlebar-button">
            <div class="button" id="titlebar-minimize" @click="minimize">
                <img src="../assets/minimize.svg" alt="minimize" />
            </div>
            <div class="button" id="titlebar-maximize" @click="maximize">
                <img src="../assets/maximize.svg" alt="maximize" />
            </div>
            <div class="button" id="titlebar-close" @click="close">
                <img src="../assets/close.svg" alt="close" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {appWindow} from "@tauri-apps/api/window";

export default defineComponent({
    name: "Titlebar",
    methods: {
        minimize() {
            appWindow.minimize();
        },
        maximize() {
            appWindow.toggleMaximize();
        },
        close() {
            appWindow.close();
        }
    }
})
</script>

<style scoped>
.titlebar {
    position: fixed;
    padding: 10px 14px;
    height: 56px;
    width: 100%;
    /*background: rebeccapurple;*/
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
}

.titlebar-button {
    height: 30px;
    user-select: none;
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
}

.titlebar-button .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 32px;
    cursor: pointer;
}

.titlebar-button .button a {
    font-size: 25px;
    color: #5b5b5b;
}
</style>