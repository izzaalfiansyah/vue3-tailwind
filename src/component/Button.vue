<script setup>
    import { reactive, onUpdated } from "vue";

    const props = defineProps({
        color: {
            default: 'blue'
        },
        size: {
            default: 'md',
        }
    })

    const state = reactive({
        padding: 'px-5 py-2.5',
    });

    function renderPadding() {
        if (props.size == 'xs' || props.size == 'sm') {
            state.padding = 'px-3 py-2';
        } else if (props.size == 'lg') {
            state.padding = 'px-5 py-3';
        } else if (props.size == 'xl') {
            state.padding = 'px-6 py-3.5';
        }
    }

    onUpdated(() => {
        renderPadding();
    })
    
</script>

<template>
    <button :class="`text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-${size} ${state.padding} text-center m-1`">
        <slot></slot>
    </button>
</template>