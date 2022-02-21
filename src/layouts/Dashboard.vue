<script setup>
    import { reactive } from "vue";
    import { RouterView } from 'vue-router';
    import Navbar from '../component/Navbar.vue';
    import Sidebar from '../component/Sidebar.vue';

    const navbarItems = [
        {
            path: '/',
            title: 'Home',
        },
        {
            path: '/about',
            title: 'About',
        },
        {
            path: '/services',
            title: 'Services',
        },
        {
            path: '/pricing',
            title: 'Pricing',
        },
        {
            path: '/contact',
            title: 'Contact',
        },
    ];

    const sidebarItems = [
        {
            path: '/',
            title: 'Dashboard',
            icon: 'home',
        },
        {
            path: '/about',
            title: 'About',
            icon: 'coffee',
        },
        {
            path: '/component',
            title: 'Component',
            icon: 'chart-box',
        },
        {
            path: '/profile',
            title: 'Profile',
            icon: 'account',
        },
        {
            divider: true,
        },
        {
            path: '/login',
            title: 'Login',
            icon: 'login',
        },
        {
            path: '/login',
            title: 'Logout',
            icon: 'logout',
        },
    ];

    const sidebar = reactive({
        open: false
    })
</script>

<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-700">
        <Navbar :items="navbarItems" title="VueWind">
            <template #prepend>
                <button type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" @click="sidebar.open = !sidebar.open">
                    <mdicon name="menu"></mdicon>
                </button>
            </template>
        </Navbar>
        <div class="flex flex-row flex-wrap h-full">
            <div :class="`lg:w-1/4 w-full lg:relative fixed top-0 bottom-0 lg:p-5 transition duration-200 lg:translate-x-0 ${sidebar.open ? 'translate-x-0' : '-translate-x-[300px]'}`">
                <Sidebar :items="sidebarItems">
                    <template #cta>
                        <div class="p-4 mt-6 rounded-lg bg-blue-100 dark:bg-blue-900" role="alert">
                            <div class="flex items-center mb-3">
                                <span class="bg-orange-100 shadow-sm text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                            </div>
                            <p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
                                Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                            </p>
                            <a class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
                        </div>
                    </template>
                </Sidebar>
            </div>
            <div class="lg:w-3/4 w-full lg:p-5 p-2">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>
