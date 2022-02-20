<script setup>
    import { reactive } from 'vue';
    import Dashboard from './layouts/Dashboard.vue';

    const state = reactive({
        name: 'Vue',
        password: '',
    });
</script>

<template>
    <Dashboard></Dashboard>
</template>
