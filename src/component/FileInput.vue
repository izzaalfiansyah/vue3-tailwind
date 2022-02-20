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
            default: '',
        },
        hint: {
            default: ''
        }
    });

    defineEmits(['update:modelValue']);
</script>

<template>
    <div class="mb-6">
        <label for="" v-show="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ label }}</label>
        <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" v-bind="$attrs" @change="$emit('update:modelValue', $event.target.files)" />
        <p v-show="hint" class="mt-2 text-sm">{{ hint }}</p>
    </div>
</template>
