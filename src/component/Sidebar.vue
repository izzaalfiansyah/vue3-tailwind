<script setup>
    import { RouterLink } from "vue-router";

    defineProps({
        items: Array,
        width: {
            type: Number,
            default: 300,
        }
    });
</script>

<template>
    <aside class="h-full" aria-label="Sidebar">
        <div class="px-3 py-4 overflow-y-auto lg:rounded-lg rounded-none h-full z-10 lg:mt-0 lg:w-full lg:mt-0 mt-[70px] lg:sticky lg:top-[90px] bg-white shadow-md dark:bg-gray-800 lg:h-[82vh] overflow-y-auto w-full" :style="{width: width + 'px', 'max-width': '100%'}">
            <ul class="space-y-2">
                <template v-for="item in items">
                    <li v-if="item.divider" class="font-bold ml-3 text-sm">
                        <hr>
                    </li>
                    <li v-else>
                        <RouterLink :to="item.path" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <mdicon :name="item.icon" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></mdicon>
                            <span class="ml-3">{{ item.title }}</span>
                        </RouterLink>
                    </li>
                </template>
            </ul>
            <slot name="cta"></slot>
        </div>
    </aside>
</template>
