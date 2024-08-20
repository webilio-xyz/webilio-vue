<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:checked', 'update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    value: {
        type: String,
        default: null,
    },
    size: {
        type: Number,
        default: 10,
    },
    disabled: {
        type: Boolean,
        default: false
    }
});


const sizeStyle = computed(() => {
    return {
        '--size': `${props.size}rem`,
    }
});



const proxyChecked = computed({
    get() {
        return !!props.modelValue;
    },

    set(val) {
        if (props.disabled) {
            return
        }
        emit('update:modelValue', val);
        emit('update:checked', val);
    },
});
</script>


<template>
    <label
        class="inline-flex items-center"
        :class="{'cursor-pointer': !disabled}"
    >
        <input
            v-model="proxyChecked"
            type="checkbox"
            value=""
            :disabled="disabled"
            class="sr-only peer"
        >
        <div
            :style="sizeStyle"
            class="relative bg-gray-700 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            :class="{
                'after:bg-gray-300': disabled,
                'bg-gray-400': disabled,
                'peer-checked:bg-blue-400': disabled
            }"
        />
    </label>
</template>

<style scoped>
    label > div {
        width: calc(var(--size)/4);
        height: calc(var(--size)/8);
    }
    label > div::after {
        width: calc(var(--size)/8 - 4px);
        height: calc(var(--size)/8 - 4px);
    }
    .peer:checked ~ .peer-checked\:after\:translate-x-full::after {
        --tw-translate-x: calc(var(--size)/8 - 1px);
    }
</style>
