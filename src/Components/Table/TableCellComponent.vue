<script setup>
import {get} from 'lodash-es';
import {computed} from "vue";
import ColumnDefinition from "../../Models/ColumnDefinition.js";

const props = defineProps({
    column: {
        type: ColumnDefinition,
        default: () => {}
    },
    data: {
        type: Object,
        default: () => {}
    }
})



const isFormatted = computed(() => {
    return !!props.column.formatter && typeof props.column.formatter === 'function';
});

const isRendered = computed(() => {
    return typeof props.column.render === 'function';
});

const computedValue = computed(() => {
    if (isFormatted.value) {
        return props.column.formatter(props.data, props.column);
    } else if (isRendered.value) {
        return props.column.render(props.data, props.column);
    } else {
        return get(props.data, props.column.key, null);
    }
});

const computedClass = computed(() => {
    return [
        `w-${props.column.size ?? 'auto'}`,
        props.column.className
    ]
});


</script>

<template>
    <td
        class="px-6 py-4 whitespace-nowrap text-sm font-medium"
        :class="computedClass"
    >
        <template v-if="!isRendered">
            {{ computedValue }}
        </template>
        <template v-else>
            <component :is="computedValue" />
        </template>
    </td>
</template>

<style scoped>

</style>
