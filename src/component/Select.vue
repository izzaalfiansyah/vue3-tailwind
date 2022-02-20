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
        <select v-bind="$attrs" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" class="transition bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:invalid:ring-red-500 focus:invalid:border-red-500 peer block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
            <slot></slot>
        </select>
        <p v-show="hint" class="mt-2 text-sm">{{ hint }}</p>
        <!-- peer-invalid:text-red-600 dark:peer-invalid:text-red-500 -->

    </div>
</template>
