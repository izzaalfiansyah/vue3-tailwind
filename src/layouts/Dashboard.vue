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
            title: 'Home',
            icon: 'home',
        },
        {
            path: '/kanban',
            title: 'Kanban',
            icon: 'coffee',
        },
        {
            path: '/inbox',
            title: 'Inbox',
            icon: 'download',
        },
        {
            path: '/user',
            title: 'User',
            icon: 'account',
        },
        {
            path: '/logout',
            title: 'Logout',
            icon: 'logout',
        },
    ];

    const sidebar = reactive({
        open: false
    })
</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <Navbar :items="navbarItems" title="VueWind">
            <template #prepend>
                <button type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" @click="sidebar.open = !sidebar.open">
                    <mdicon name="menu"></mdicon>
                </button>
            </template>
        </Navbar>
        <div class="flex flex-row flex-wrap">
            <div class="lg:w-1/4 w-5/6 lg:relative absolute top-0 bottom-0 lg:p-5">
                <Sidebar :items="sidebarItems" class="lg:block" :class="{'hidden': !sidebar.open}"></Sidebar>
            </div>
            <div class="lg:w-3/4 w-full lg:p-5 p-2">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>
