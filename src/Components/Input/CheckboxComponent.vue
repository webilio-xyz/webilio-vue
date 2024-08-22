<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:checked', 'update:modelValue']);

const props = defineProps({
    checked: {
        type: Boolean,
        default: false,
    },
});

const proxyChecked = computed({
    get() {
        return props.checked;
    },

    set(val) {
        emit('update:checked', val);
        emit('update:modelValue', val);
    },
});
</script>


<template>
    <input
        v-model="proxyChecked"
        type="checkbox"
        class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
    >
</template>