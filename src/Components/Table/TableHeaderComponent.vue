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

const emit = defineEmits(["sort"]);

const handleColumnSort = (column) => {
  if (column.sortable) {
    switch (column.sortDirection) {
      case '':
        column.sortDirection = 'asc';
        break;
      case 'asc':
        column.sortDirection = 'desc';
        break;
      default:
        column.sortDirection = ''
    }

    emit("sort", { column: column.name, direction: column.sortDirection });
  }
};
</script>

<template>
  <thead :class="headerClass">
  <tr :class="trClass">
    <th
        v-for="column in renderedColumns"
        :key="column.key"
        scope="col"
        class="px-6 py-3 text-start"
        :class="[column.thClassName, { 'cursor-pointer': column.sortable }]"
    >
      <div class="flex" @click="handleColumnSort(column)">
        {{ column.name }}

        <svg v-if="column.sortable && column.sortDirection !== ''" class="ms-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#000000" viewBox="0 0 256 256">
          <path :d="column.sortDirection === 'asc'
             ? 'M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z'
             : 'M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z'">
          </path>
        </svg>
      </div>
    </th>
  </tr>
  </thead>
</template>

<style scoped>

</style>
