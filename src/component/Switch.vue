<script>
    export default {
        inheritAttrs: false,
    };
</script>

<script setup>
    defineProps({
        label: {
            type: String,
            default: '',
        },
        modelValue: {
            default: false,
        },
        hint: {
            default: ''
        }
    });

    defineEmits(['update:modelValue']);
</script>


<template>
    <div class="mb-4">
        <label for="" class="flex relative items-center mb-4 cursor-pointer z-5">
            <input type="checkbox" class="sr-only" v-bind="$attrs" :checked="modelValue" :value="modelValue" @change="$emit('update:modelValue', $event.target.checked)" />
            <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
            <span v-show="label" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ label }}</span>
        </label>
    </div>
</template>
