<script setup>
import {computed} from "vue";
import Columns from "../../Models/Columns.ts";

const props = defineProps({
  columns: {
    type: Columns,
    default: []
  },
  trClass: {
    type: String,
    default: ''
  },
  headerClass: {
    type: String,
    default: 'sticky border-b-2 h-20 bg-gray-100 z-10 text-gray-700 text-xs font-medium uppercase shadow-md'
  }
})

const renderedColumns = computed(() => {
  return props.columns.columns.filter(column => column.visible).sort((a, b) => a.order >= b.order ? 1 : -1);
})
</script>

<template>
  <thead :class="headerClass">
  <tr :class="trClass">
    <th
        v-for="column in renderedColumns"
        :key="column.key"
        scope="col"
        class="px-6 py-3 text-start"
        :class="column.thClassName"
    >
      {{ column.name }}
    </th>
  </tr>
  </thead>
</template>

<style scoped>

</style>
