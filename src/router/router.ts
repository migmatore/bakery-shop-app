import {
    createWebHistory,
    createRouter
} from "vue-router";

import LoginPage from "../views/LoginPage.vue"
import MainPage from "../views/MainPage.vue";
import SignupPage from "../views/SignupPage.vue";
import CreateStorePage from "../views/CreateStorePage.vue";

const history = createWebHistory();
const routes = [
    {
        path: "/",
        name: "home",
        component: MainPage
    },
    {
        path: "/login",
        component: LoginPage,
    },
    {
        path: "/signup",
        component: SignupPage
    },
    {
        path: "/store/create",
        component: CreateStorePage
    }
];

const router = createRouter({
    history,
    routes
});

export default router;