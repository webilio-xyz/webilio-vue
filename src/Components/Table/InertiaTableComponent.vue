<script setup>
import {router} from "@inertiajs/vue3";
import {computed, ref, watch} from "vue";
import { usePage } from '@inertiajs/vue3';
import {debounce, findIndex, get, forEach} from "lodash-es";
import Columns from "../../Models/Columns";
import TablePaginationComponent from "./TablePaginationComponent.vue";
import TableComponent from "./TableComponent.vue";

const page = usePage();

const props = defineProps({
  columns: {
    type: Columns,
    required: true
  },
  additionalFilters: {
    type: Object,
    default: () => ({})
  },
  inertiaKey: {
    type: String,
    required: true
  },
  tableClass: {
    type: String,
    default: ''
  },
  footerClass: {
    type: String,
    default: ''
  },
  headerClass: {
    type: String,
    default: 'sticky border-b-2 h-20 bg-gray-100 z-10 text-gray-700 text-xs font-medium uppercase shadow-md'
  },
  trHeadClass: {
    type: String,
    default: ''
  },
  paginationClass: {
      type: String,
      default: ''
  },
  currentPage: {
    type: Number,
    default: 1
  },
  sorting: {
    type: Array,
    default: () =>[]
  }
})

const filters = ref({});

const data = ref(get(page.props, props.inertiaKey, {}));

const computedResults = computed(() => {
  return get(data.value, 'data', []);
})

const dataLoading = ref(false);

const tableCurrentPage = ref(get(data, 'current_page', props.currentPage));

const sorting = ref(props.sorting);

defineExpose({
  getData
});

const sortingForRequest = computed(() => {
    let sortingForRequest = {};

    forEach(sorting.value, (sort, index) => {
        sortingForRequest[index] = {key: sort.key, direction: sort.direction};
    })

    return sortingForRequest;
})

function getData() {
  dataLoading.value = true;
  router.get(
      window.location.pathname,
      {
        filters: {...props.additionalFilters, ...filters.value},
        sort: sortingForRequest.value,
        page: tableCurrentPage.value
      },
      {
        preserveState: true,
        preserveScroll: true,
        only: [props.inertiaKey],
        onSuccess: (page) => {
          data.value = get(page.props, props.inertiaKey);
        },
        onFinish: () => {
          dataLoading.value = false;
        }
      }
  );
}


const debouncedGetData = debounce(getData, 500);

watch(props, debouncedGetData, {deep: true});
watch(tableCurrentPage, debouncedGetData)

watch(() => props.currentPage, (newPage) => {
    tableCurrentPage.value = newPage
})

watch(() => props.sorting, (newSorting) => {
    sorting.value = newSorting
})

watch(sorting, () => {
    debouncedGetData()
}, {deep: true})

const addSort = (column) => {
    let direction = getSortDirection(column);
    let sortingIndex = findIndex(sorting.value, (value) => value.key === column.key);
    if (direction) {
        if (sortingIndex > -1) {
            sorting.value[sortingIndex] = {
                key: column.key,
                'direction': direction
            };
        } else {
            sorting.value.push({
                key: column.key,
                'direction': direction
            });
        }
    } else {
        delete sorting.value[sortingIndex];
    }
}
const setSort = (column) => {
    sorting.value = [{
        key: column.key,
        'direction': getSortDirection(column)
    }];
}


const getSortDirection = (column) => {
    let sortingIndex = findIndex(sorting.value, (value) => value.key === column.key);
    switch (get(sorting.value, `${sortingIndex}.direction`, false)) {
        case 'asc':
            return 'desc';
        case 'desc':
            return false;
        default:
            return 'asc';
    }
}
</script>

<template>
  <TableComponent
      ref="props.table"
      :is-loading="dataLoading"
      :data="computedResults"
      :columns="columns"
      :class="tableClass"
      :headerClass="headerClass"
      :trHeadClass="trHeadClass"
      :sorting="sorting"
      @setSort="setSort"
      @addSort="addSort"
  />

    <slot name="pagination">
        <div class="flex items-center" :class="footerClass">
            <div class="flex-grow flex">
                <span class="py-2">{{ $t('table.nbResults', {total: get(data, 'total', 0)}) }}</span>
            </div>

            <TablePaginationComponent
                :last-page="data.last_page"
                v-model="tableCurrentPage"
                :class="footerClass"
            />
        </div>
    </slot>

</template>
