<script setup>
    defineProps({
        color: {
            default: 'blue'
        },
        border: {},
    })
</script>

<template>
    <div :class="`p-4 mb-4 text-sm text-${color}-700 bg-${color}-100 rounded-lg dark:bg-${color}-200 dark:text-${color}-800 ${border ? `border-${border}-4 border-${color}-500` : ''}`" role="alert">
        <slot></slot>
    </div>
</template>