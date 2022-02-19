<script setup>
    import { defineProps } from "vue";

    defineProps({
        color: {
            default: 'blue'
        },
        size: {
            default: 'xs'
        }
    })
</script>

<template>
    <span :class="`bg-${color}-100 text-${color}-800 text-${size} font-semibold mr-2 px-2.5 py-0.5 rounded`">
        <slot></slot>
    </span>
</template>
