<script setup>
    import { reactive } from 'vue';

    const state = reactive({
        mobileOpen: false,
    });

    defineProps({
        title: String,
        items: Array,
    });

    function toggleMobileMenu() {
        state.mobileOpen = !state.mobileOpen;
    }
</script>

<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow-md z-20 sticky top-0 h-[70px]">
        <div class="container flex flex-wrap justify-between h-full items-center mx-auto">
            <slot name="prepend"></slot>
            <a href="#" class="flex">
                <slot name="logo">
                    <svg class="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA" />
                        <path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE" />
                        <path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2" />
                    </svg>
                </slot>
                <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">{{ title }}</span>
            </a>
            <button @click="toggleMobileMenu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <mdicon name="dots-vertical"></mdicon>
            </button>
            <div :class="{ hidden: !state.mobileOpen }" class="w-full md:block md:w-auto bg-white dark:bg-gray-800 z-10 md:shadow-none shadow-md p-3 rounded-lg">
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li v-for="item in items">
                        <a :href="item.path" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
