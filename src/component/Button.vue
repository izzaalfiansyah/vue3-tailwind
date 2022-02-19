<script setup>
    import { defineProps } from "vue";

    defineProps({
        color: {
            default: 'blue'
        },
        className: {
            default: '',
            type: String
        }
    })
</script>

<template>
    <button :class="`text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${className}`">
        <slot></slot>
    </button>
</template>