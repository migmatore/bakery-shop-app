<!-- <template>
    <div class="sidebar" :class="isOpened ? 'open' : ''" :style="cssVars">
        <div class="logo-details" style="margin: 6px 14px 0 14px;">
            <img v-if="menuLogo" :src="menuLogo" alt="menu-logo" class="menu-logo icon">
            <i v-else class="bx icon" :class="menuIcon" />
            <div class="logo_name">
                {{ menuTitle }}
            </div>
            <i class="bx" :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'" id="btn" @click="close" />
        </div>

        <div
            style="display: flex ; flex-direction:column; justify-content: space-between; flex-grow: 1; max-height: calc(100% - 60px); ">
            <div id="my-scroll" style="margin: 6px 14px 0 14px;">
                <ul class="nav-list" style="overflow: visible;">
                    <li v-if="isSearch" @click="isOpened = true">
                        <i class="bx bx-search" />
                        <input type="text" :placeholder="searchPlaceholder"
                            >
                        <span class="tooltip">{{ searchTooltip }}</span>
                    </li>

                    <span v-for="(menuItem, index) in menuItems" :key="index">
                        <li>
                            <a :href="menuItem.link">
                                <i class="bx" :class="menuItem.icon || 'bx-square-rounded'" />
                                <span class="links_name">{{ menuItem.name }}</span>
                            </a>
                            <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
                        </li>
                    </span>
                </ul>
            </div>

            <div v-if="isLoggedIn" class="profile">
                <div class="profile-details">
                    <img src="../assets/photo.jpg" alt="profileImg">
                    <i v-else class="bx bxs-user-rectangle" />
                    <div class="name_job">
                        <div class="name">
                            {{ profileName }}
                        </div>
                        <div class="job">
                            {{ profileRole }}
                        </div>
                    </div>
                </div>
                <i v-if="isExitButton" class="bx bx-log-out" id="log_out" @click.stop="$emit('button-exit-clicked')" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useMainStore } from '../store';

interface p {
    link: string;
    name: String;
    tooltip: String;
    icon: String;
}

export default defineComponent({
    name: 'Sidebar',
    props: {
        //! Menu settings
        isMenuOpen: {
            type: Boolean,
            default: true,
        },
        menuTitle: {
            type: String,
            default: 'Bakery',
        },
        menuLogo: {
            type: String,
            default: '',
        },
        menuIcon: {
            type: String,
            default: 'bxl-c-plus-plus',
        },
        isPaddingLeft: {
            type: Boolean,
            default: true,
        },
        menuOpenedPaddingLeftBody: {
            type: String,
            default: '250px'
        },
        menuClosedPaddingLeftBody: {
            type: String,
            default: '78px'
        },
        //! Menu items
        menuItems: {
            type: Array<p>,
            default: () => [
                {
                    link: '#',
                    name: 'Dashboard',
                    tooltip: 'Dashboard',
                    icon: 'bx-grid-alt',
                },
                {
                    link: '#',
                    name: 'User',
                    tooltip: 'User',
                    icon: 'bx-user',
                },
                {
                    link: '#',
                    name: 'Messages',
                    tooltip: 'Messages',
                    icon: 'bx-chat',
                },
                {
                    link: '#',
                    name: 'Analytics',
                    tooltip: 'Analytics',
                    icon: 'bx-pie-chart-alt-2',
                },
                {
                    link: '#',
                    name: 'File Manager',
                    tooltip: 'Files',
                    icon: 'bx-folder',
                },
                {
                    link: '#',
                    name: 'Order',
                    tooltip: 'Order',
                    icon: 'bx-cart-alt',
                },
                {
                    link: '#',
                    name: 'Saved',
                    tooltip: 'Saved',
                    icon: 'bx-heart',
                },
                {
                    link: '#',
                    name: 'Setting',
                    tooltip: 'Setting',
                    icon: 'bx-cog',
                },
            ],
        },
        //! Search
        isSearch: {
            type: Boolean,
            default: true,
        },
        searchPlaceholder: {
            type: String,
            default: 'Search...',
        },
        searchTooltip: {
            type: String,
            default: 'Search',
        },
        //! Profile detailes
        profileName: {
            type: String,
            default: 'Fayzullo Saidakbarov',
        },
        profileRole: {
            type: String,
            default: 'Frontend vue developer',
        },
        isExitButton: {
            type: Boolean,
            default: true,
        },
        isLoggedIn: {
            type: Boolean,
            default: false,
        },
        //! Styles
        bgColor: {
            type: String,
            default: '#11101d',
        },
        secondaryColor: {
            type: String,
            default: '#1d1b31',
        },
        homeSectionColor: {
            type: String,
            default: '#e4e9f7',
        },
        logoTitleColor: {
            type: String,
            default: '#fff',
        },
        iconsColor: {
            type: String,
            default: '#fff',
        },
        itemsTooltipColor: {
            type: String,
            default: '#e4e9f7',
        },
        searchInputTextColor: {
            type: String,
            default: '#fff',
        },
        menuItemsHoverColor: {
            type: String,
            default: '#fff',
        },
        menuItemsTextColor: {
            type: String,
            default: '#fff',
        },
        menuFooterTextColor: {
            type: String,
            default: '#fff',
        },
    },
    data() {
        return {
            isOpened: false
        }
    },
    mounted() {
        this.isOpened = this.isMenuOpen
    },
    computed: {
        cssVars() {
            return {
                // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
                '--bg-color': this.bgColor,
                '--secondary-color': this.secondaryColor,
                '--home-section-color': this.homeSectionColor,
                '--logo-title-color': this.logoTitleColor,
                '--icons-color': this.iconsColor,
                '--items-tooltip-color': this.itemsTooltipColor,
                '--serach-input-text-color': this.searchInputTextColor,
                '--menu-items-hover-color': this.menuItemsHoverColor,
                '--menu-items-text-color': this.menuItemsTextColor,
                '--menu-footer-text-color': this.menuFooterTextColor,
            }
        },
        state() {
            return this.closeSidebar
        }
    },
    watch: {
        isOpened() {
            window.document.body.style.paddingLeft = this.isOpened && this.isPaddingLeft ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody
        }
    },
    setup() {
        const MainStore = useMainStore();
        const getSidebarState = MainStore.getSidebarState;
        return {
            closeSidebar: MainStore.closeSidebar, getSidebarState
        }
    },
    methods: {
        close() {
            this.closeSidebar();
            this.isOpened = !this.isOpened;
        }
    }
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    transition: all 0.5s ease;
}

.menu-logo {
    width: 30px;
    margin: 0 10px 0 10px;
}

.sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    min-height: min-content;
    /* overflow-y: auto; */
    width: 78px;
    background: var(--bg-color);
    /* padding: 6px 14px 0 14px; */
    z-index: 99;
    transition: all 0.5s ease;
}

.sidebar.open {
    width: 250px;
}

.sidebar .logo-details {
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
}

.sidebar .logo-details .icon {
    opacity: 0;
    transition: all 0.5s ease;
}

.sidebar .logo-details .logo_name {
    color: var(--logo-title-color);
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
}

.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
    opacity: 1;
}

.sidebar .logo-details #btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 22px;
    transition: all 0.4s ease;
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
}

.sidebar.open .logo-details #btn {
    text-align: right;
}

.sidebar i {
    color: var(--icons-color);
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
}

.sidebar .nav-list {
    margin-top: 20px;
    /* margin-bottom: 60px; */
    /* height: 100%; */
    /* min-height: min-content; */
}

.sidebar li {
    position: relative;
    margin: 8px 0;
    list-style: none;
}

.sidebar li .tooltip {
    position: absolute;
    top: -20px;
    left: calc(100% + 15px);
    z-index: 3;
    background: var(--items-tooltip-color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
}

.sidebar li:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
}

.sidebar.open li .tooltip {
    display: none;
}

.sidebar input {
    font-size: 15px;
    color: var(--serach-input-text-color);
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.5s ease;
    background: var(--secondary-color);
}

.sidebar.open input {
    padding: 0 20px 0 50px;
    width: 100%;
}

.sidebar .bx-search {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 22px;
    background: var(--secondary-color);
    color: var(--icons-color);
}

.sidebar.open .bx-search:hover {
    background: var(--secondary-color);
    color: var(--icons-color);
}

.sidebar .bx-search:hover {
    background: var(--menu-items-hover-color);
    color: var(--bg-color);
}

.sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: var(--bg-color);
}

.sidebar li a:hover {
    background: var(--menu-items-hover-color);
}

.sidebar li a .links_name {
    color: var(--menu-items-text-color);
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
}

.sidebar.open li a .links_name {
    opacity: 1;
    pointer-events: auto;
}

.sidebar li a:hover .links_name,
.sidebar li a:hover i {
    transition: all 0.5s ease;
    color: var(--bg-color);
}

.sidebar li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
}

.sidebar div.profile {
    position: relative;
    height: 60px;
    width: 78px;
    /* left: 0;
    bottom: 0; */
    padding: 10px 14px;
    background: var(--secondary-color);
    transition: all 0.5s ease;
    overflow: hidden;
}

.sidebar.open div.profile {
    width: 250px;
}

.sidebar div .profile-details {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.sidebar div img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
}

.sidebar div.profile .name,
.sidebar div.profile .job {
    font-size: 15px;
    font-weight: 400;
    color: var(--menu-footer-text-color);
    white-space: nowrap;
}

.sidebar div.profile .job {
    font-size: 12px;
}

.sidebar .profile #log_out {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: var(--secondary-color);
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    transition: all 0.5s ease;
}

.sidebar.open .profile #log_out {
    width: 50px;
    background: var(--secondary-color);
    opacity: 0;
}

.sidebar.open .profile:hover #log_out {
    opacity: 1;
}

.sidebar.open .profile #log_out:hover {
    opacity: 1;
    color: red;
}

.sidebar .profile #log_out:hover {
    color: red;
}

.home-section {
    position: relative;
    background: var(--home-section-color);
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px);
    transition: all 0.5s ease;
    z-index: 2;
}

.sidebar.open~.home-section {
    left: 250px;
    width: calc(100% - 250px);
}

.home-section .text {
    display: inline-block;
    color: var(--bg-color);
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
}

.my-scroll-active {
    overflow-y: auto;
}

#my-scroll {
    overflow-y: auto;
    height: calc(100% - 60px);
}

#my-scroll::-webkit-scrollbar {
    display: none;
    /* background-color: rgba(255, 255, 255, 0.2); 
    width: 10px;
    border-radius:5px  */
}

/* #my-scroll::-webkit-scrollbar-thumb{
    background-color: red;
    border-radius:5px 
  }
  #my-scroll::-webkit-scrollbar-button:vertical:start:decrement{
    display:none;
  }
  #my-scroll::-webkit-scrollbar-button:vertical:end:increment{
    display:none;
  } */
@media (max-width: 420px) {
    .sidebar li .tooltip {
        display: none;
    }
}
</style> -->

<template>
    <nav class="sidebar" :class="{ close: isClosed }">
        <div class="logo">
            <div class="logo-image">
                <img src="../assets/logo.png"/>
            </div>
            <span class="logo-title">Bakery</span>
        </div>

        <div class="menu-items">
            <ul class="nav-links">
                <li>
                    <router-link to="/">
                        <i class="uil uil-store"></i>
                        <span class="link-name">Store</span>
                    </router-link>
                </li>
                <li><a href="">
                    <i class="uil uil-shopping-basket"></i>
                    <span class="link-name">Cart</span>
                </a></li>

            </ul>
            <ul class="logout-mode">
                <li>
                    <router-link to="/login">
                        <i class="uil uil-user-circle"></i>
                        <span class="link-name">Login</span>
                    </router-link>
                </li>
                <!-- <li class="mode">
						<a href="">
							<i class="uil uil-moon"></i>
							<span class="link-name">Dark Mode</span>
						</a>
						<div class="mode-toggle">
							<span class="switch"></span>
						</div>
					</li> -->
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Sidebar',
    data() {
        return {
            isClosed: false,
        }
    }
})
</script>

<style>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 200px;
    padding: 10px 14px;
    background-color: #f5f3f0;
    border-right: 1px solid #e7e7e7;
}

.sidebar.close {
    width: 73px;
}

.sidebar .logo {
    display: flex;
    align-items: center;
}

.sidebar .logo-image {
    display: flex;
    justify-content: center;
    min-width: 45px;
}

.sidebar .logo-image img {
    width: 40px;
    object-fit: cover;
    border-radius: 50%;
}

.sidebar .logo .logo-title {
    font-size: 22px;
    font-weight: 600;
    margin-left: 14px;
    color: #575757;
}

.sidebar .menu-items {
    margin-top: 25px;
    height: calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.menu-items .nav-links {
    list-style: none;
    padding: 0;
}

.menu-items li {
    list-style: none;
    margin-bottom: 15px;
}

.menu-items li a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    text-decoration: none;
    position: relative;
    color: #5b5b5b;
    border-radius: 12px;
    transition: all 0.4s ease;
    border: 1px solid #ddd8d4;
    padding-left: 20px;
}

.menu-items li a:hover {
    background-color: #fac450;
    border: 1px solid #fac450;
    border-radius: 12px;
    box-shadow: 0px 5px 20px -2px #fac450;
}

/* .sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: var(--bg-color);
}

.sidebar li a:hover {
    background: var(--menu-items-hover-color);
} */

.nav-links li a:hover:before {
    content: "";
    position: absolute;
    left: -7px;
    height: 5px;
    width: 5px;
    border-radius: 50%;
}

.menu-items li a i {
    font-size: 24px;
    /*font-weight: 45;*/
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    color: #5b5b5b;
}

.menu-items li a .link-name {
    font-size: 18px;
    font-weight: 400;
}

.menu-items .logout-mode {
    padding-top: 15px;
    border-top: 1px solid #EDEDED;
    position: fixed;
    bottom: 0;
    width: 171px;
}

.menu-items .mode {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.menu-items .mode-toggle {
    position: relative;
    /* right: 14px; */
    height: 50px;
    min-height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 10px;
}

.mode-toggle .switch {
    position: relative;
    display: inline-block;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: #F3F3F3;
}

.switch:before {
    content: "";
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
}
</style>