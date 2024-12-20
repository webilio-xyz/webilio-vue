<script setup>
import Columns from "../../Models/Columns.ts";
import TableRowComponent from "./TableRowComponent.vue";
import TableHeaderComponent from "./TableHeaderComponent.vue";

const props = defineProps({
  columns: {
    type: Columns,
    default: () => new Columns()
  },
  data: {
    type: Array,
    default: () => []
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  headerClass: {
    type: String,
    default: ''
  },
  trHeadClass: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(["sort"])

const handleSort = ({ column, direction }) => {
  emit("sort", { column: column, direction: direction });
};

</script>

<template>
  <table class="overflow-x-auto table w-full relative">
    <TableHeaderComponent :columns="columns" :headerClass="headerClass" :trClass="trHeadClass" @sort="handleSort"/>
    <template v-if="data?.length && !isLoading">
      <template v-for="(datum, i) in data" :key="i">
        <TableRowComponent
            :columns="columns"
            :data="datum"
            :class="datum?.trClassName"
        />
      </template>

    </template>
    <template v-else-if="isLoading">
      <tr>
        <td :colspan="columns.columns.length" class="text-center py-4">
          <div class="flex items-center justify-center">
            {{ $t('text.loading') }}
            <div class="mx-1">
              <svg
                  class="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                />
                <path
                    class="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                />
              </svg>
            </div>

          </div>
        </td>

      </tr>
    </template>
    <template v-else>
      <tr>
        <td
            :colspan="columns.columns.length"
            class="text-center pt-4 text-gray-500"
        >
          {{ $t('text.no_results') }}
        </td>
      </tr>
    </template>
  </table>
</template>

<style scoped>

</style>
