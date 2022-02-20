import { createRouter, createWebHistory } from 'vue-router';
import AboutVue from '../views/About.vue';
import ComponentVue from '../views/Component.vue';
import HomeVue from '../views/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeVue,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutVue,
        },
        {
            path: '/component',
            component: ComponentVue,
        },
    ],
});

export default router;
