<script setup>
import Columns from "../../Models/Columns";
import TableCell from "./TableCellComponent.vue";

defineProps({
    columns: {
        type: Columns,
        default: () => new Columns()
    },
    data: {
        type: Object,
        default: () => {}
    }
})
</script>

<template>
    <tr class="border-0 border-b">
        <TableCell
            v-for="(column) in columns.columns"
            :key="column.key"
            :column="column"
            :data="data"
        />
    </tr>
</template>

<style scoped>

</style>
