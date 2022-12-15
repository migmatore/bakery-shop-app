<template>
    <div data-tauri-drag-region class="titlebar">
        <i class="uil uil-bars sidebar-toggle" @click="closeSidebar" style="color: #5b5b5b;"></i>
        <div class="search-box">
            <i class="uil uil-search"></i>
            <input type="text" placeholder="Search here...">
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
import { defineComponent } from 'vue';
import { appWindow } from '@tauri-apps/api/window';

export default defineComponent({
    name: 'MainTitlebar',
    methods: {
		closeSidebar() {
			// this.isClosed = !this.isClosed
		},
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
	top: 0;
	left: 200px;
	display: flex;
	width: calc(100% - 200px);
	justify-content: space-between;
	align-items: center;
	padding: 10px 14px;
	/* background-color: aqua; */
	z-index: 100;
	border-bottom: 1px solid #e7e7e7;
	background: #F5F3F0;
}

.main-section .titlebar .sidebar-toggle {
	font-size: 26px;
	cursor: pointer;
	color: #242424;
}

.main-section .titlebar .search-box {
	position: relative;
	height: 35px;
	max-width: 400px;
	width: 100%;
	margin: 0 30px;
}

.titlebar .search-box input {
	position: absolute;
	border: 1px solid #ddd8d4;
	background-color: #F5F3F0;
	padding: 0 25px 0 50px;
	border-radius: 5px;
	height: 100%;
	width: 100%;
	font-size: 15px;
	font-weight: 400;
	outline: none;
}

.titlebar .search-box i {
	position: absolute;
	left: 15px;
	font-size: 18px;
	z-index: 10;
	top: 50%;
	transform: translateY(-50%);
	color: #6F6F6F;
}

.titlebar .titlebar-button {
	height: 30px;
	user-select: none;
	display: flex;
	justify-content: flex-end;
	position: relative;
	top: 0;
	left: 0;
	right: 0;
    cursor: pointer;
	/* margin-right: 14px; */
}

.titlebar .titlebar-button .button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 32px;
}
</style>
