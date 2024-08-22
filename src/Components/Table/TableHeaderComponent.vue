<script setup>
import {computed} from "vue";
import Columns from "../../Models/Columns.ts";

const props = defineProps({
    columns: {
        type: Columns,
        default: []
    }
})

const renderedColumns = computed(() => {
    return props.columns.columns.filter(column => column.visible).sort((a,b) => a.order >= b.order ? 1 : -1);
})
</script>

<template>
    <thead class="sticky top-20 border-b-2 h-20 bg-gray-100 z-10">
        <tr class="shadow-md">
            <th
                v-for="column in renderedColumns"
                :key="column.key"
                class="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"
            >
                {{ column.name }}
            </th>
        </tr>
    </thead>
</template>

<style scoped>

</style>
