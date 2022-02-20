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
    });

    defineEmits(['update:modelValue']);
</script>

<template>
    <div class="flex items-center mb-4">
        <input type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 rounded-full border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" :checked="modelValue" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" />
        <label v-show="label" for="" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {{ label }}
        </label>
    </div>
</template>
