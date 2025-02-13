<script setup>
import MenuItems from "./MenuItemsComponent.vue";
import {trans} from "laravel-vue-i18n";

const props = defineProps({
    menu: {
        type: Array,
        required: true
    },
})
</script>

<template>
    <!-- <div class="flex flex-col sidebar min-h-screen position-fixed top-0 admin-sidebar border-r-2 border-r-admin-600 w-full pl-6 pt-6 pb-6"> -->
    <div class="flex flex-col sidebar border-r-2 border-r-admin-600 w-full pl-6 pt-6 pb-6">
        <hr>
        <MenuItems
            :menu="menu"
            class="mt-3 space-y-2 "
        />
    </div>
</template>

<style scoped>

</style>