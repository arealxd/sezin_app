import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/home/index.vue";
import Articles from "@/views/articles/index.vue";
import Profile from "@/views/profile/index.vue";
import Admin from "@/views/admin/index.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/articles',
        name: 'articles',
        component: Articles
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;