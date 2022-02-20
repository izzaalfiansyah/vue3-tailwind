<script setup>
    defineProps({
        items: Array,
    });
</script>

<template>
    <aside class="w-full h-full" aria-label="Sidebar">
        <div class="px-3 py-4 overflow-y-auto lg:rounded-lg rounded-none h-full z-10 lg:mt-0 fixed w-[300px] lg:w-full lg:mt-0 mt-[70px] lg:sticky lg:top-[90px] bg-white shadow-md dark:bg-gray-800 lg:h-[82vh] overflow-y-auto">
            <ul class="space-y-2">
                <li v-for="item in items">
                    <a :href="item.path" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <mdicon :name="item.icon" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></mdicon>
                        <span class="ml-3">{{ item.title }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>
