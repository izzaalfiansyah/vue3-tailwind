<script setup>
    import { RouterLink } from "vue-router";

    defineProps({
        items: {
            type: Array,
            required: true,
        }
    })
</script>

<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li v-for="item in items">
                <div class="flex items-center">
                    <mdicon name="chevron-right"></mdicon>
                    <RouterLink :to="item.path" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">{{ item.title }}</RouterLink>
                </div>
            </li>
        </ol>
    </nav>
</template>
