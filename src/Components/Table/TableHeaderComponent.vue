<script setup>
import {computed} from "vue";
import Columns from "../../Models/Columns.ts";
import {get} from "lodash-es";

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
  },
  sorting: {
    type: Object,
    default: () => ({})
  }
})

const renderedColumns = computed(() => {
  return props.columns.columns.filter(column => column.visible).sort((a, b) => a.order >= b.order ? 1 : -1);
})

const emit = defineEmits(["sort"]);

const sortDirection = (column) => {
  if (!column.sortable) {
    return '';
  }
  switch (get(props.sorting, column.key, '')) {
    case 'asc':
      return 'asc';
    case 'desc':
      return 'desc';
    default:
      return '';
  }
}

const sort = (column) => {
  if (!column.sortable) {
    return '';
  }
  emit('sort', column);
}
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
      <div class="flex items-center" @click="sort(column)">
        {{ column.name }}

        <svg v-if="sortDirection(column)" class="ms-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#000000" viewBox="0 0 256 256">
          <path :d="sortDirection(column) === 'asc'
             ? 'M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z'
             : 'M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z'">
          </path>
        </svg>
      </div>
    </th>
  </tr>
  </thead>
</template>

<style scoped>

</style>
