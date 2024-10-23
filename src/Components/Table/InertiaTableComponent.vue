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
  }
})

const filters = ref({});

const data = ref(get(page.props, props.inertiaKey, {}));

const computedResults = computed(() => {
  return get(data.value, 'data', []);
})

const dataLoading = ref(false);

const currentPage = ref(get(data, 'current_page', 1));

defineExpose({
  getData
});

function getData() {
  dataLoading.value = true;
  router.get(
      window.location.pathname,
      {
        filters: {...props.additionalFilters, ...filters.value},
        page: currentPage.value
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
watch(currentPage, debouncedGetData)

</script>

<template>
  <TableComponent
      class="mt-6"
      :is-loading="dataLoading"
      :data="computedResults"
      :columns="columns"
  />
  <div class="flex mt-4 pt-4">
    <div class="flex-grow flex">
      <span class="py-2">{{ $t('table.nbResults', {total: get(data, 'total', 0)}) }}</span>
    </div>

    <TablePaginationComponent
        :last-page="data.last_page"
        v-model="currentPage"
    />
  </div>
</template>
