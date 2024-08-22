<script setup>
import Columns from "../../Models/Columns";
import TableCell from "./TableCellComponent.vue";

const props = defineProps({
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
        <slot
            v-for="column in columns.columns"
            name="TableCell"
        >
            <TableCell
                :column="column"
                :data="data"
            />
        </slot>
    </tr>
</template>

<style scoped>

</style>
