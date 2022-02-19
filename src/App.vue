<script setup>
    import { reactive } from "vue";
    import Button from "./component/Button.vue";

    const state = reactive({
        name: 'Vue'
    });
</script>

<template>
    <div class="p-3 h-screen flex items-center justify-center bg-blue-400">
        <div class="p-4 rounded shadow text-center w-[800px] bg-white">
            <Button color="red">Submit</Button>
        </div>
    </div>
</template>