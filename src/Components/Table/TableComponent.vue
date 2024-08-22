<script setup>
import Columns from "../../Models/Columns.ts";
import TableRowComponent from "./TableRowComponent.vue";
import TableHeaderComponent from "./TableHeaderComponent.vue";
import {computed, useSlots} from "vue";

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
    }
});

</script>

<template>
    <table class="overflow-x-auto table w-full relative">
        <TableHeaderComponent :columns="columns" />
        <template v-if="data?.length && !isLoading">
          <template v-for="datum in data">
              <TableRowComponent
                  :columns="columns"
                  :data="datum"
              />
          </template>

        </template>
        <template v-else-if="isLoading">
            <div>
                {{ $t('text.loading') }}
                <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
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
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            </div>
        </template>
        <template v-else>
            <tr>
                <td
                    class="text-center pt-4 text-gray-500"
                    :colspan="columns.columns.length"
                >
                    {{ $t('text.no_results') }}
                </td>
            </tr>
        </template>
    </table>
</template>

<style scoped>

</style>
