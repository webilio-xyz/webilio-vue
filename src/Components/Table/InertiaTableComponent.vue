<script setup>
import {router} from "@inertiajs/vue3";
import {computed, ref, watch} from "vue";
import { usePage } from '@inertiajs/vue3';
import {debounce, get} from "lodash-es";
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
    default: ''
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
    type: Object,
    default: () => ({})
  }
})

const filters = ref({});

const data = ref(get(page.props, props.inertiaKey, {}));

const computedResults = computed(() => {
  return get(data.value, 'data', []);
})

const dataLoading = ref(false);

const tableCurrentPage = ref(get(data, 'current_page', props.currentPage));



defineExpose({
  getData
});

function getData() {
  dataLoading.value = true;
  router.get(
      window.location.pathname,
      {
        filters: {...props.additionalFilters, ...filters.value},
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

const emit = defineEmits(["sort"])

const handleSort = (column) => {
  switch (get(props.sorting, column.name, false)) {
    case 'asc':
      emit("sort", column,'desc' );
      break;
    case 'desc':
      emit("sort", column, false );
      break;
    default:
      emit("sort", column,'asc' );
      break;
  }
};
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
      @sort="handleSort"
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
