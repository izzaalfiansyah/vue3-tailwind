<script setup>
    defineProps({
        title: {
            type: String,
            default: '',
        }
    })
</script>

<template>
    <div class="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <slot name="img">
        </slot>
        <div class="p-5">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white" v-show="title">
                {{ title }}
            </h5>
            <div class="mb-3 text-gray-700 dark:text-gray-400">
                <slot></slot>
            </div>
            <slot name="actions"></slot>
        </div>
    </div>
</template>