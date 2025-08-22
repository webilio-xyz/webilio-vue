<script setup>
import { onMounted, ref} from 'vue';
import { vMaska } from "maska/vue";
defineProps({
    modelValue: String,
    min: String,
    max: String,
    mask: {
        type: String,
        default: null
    }
});

defineEmits(['update:modelValue']);

const input = ref(null);
const isMasked = ref(props.mask == null)

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        ref="input"
        v-maska="mask"
        class="wv-input wv-text-input focus:ring-inputfocus-500 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm disabled:bg-gray-200 px-1"
        :value="modelValue"
        :min="min"
        :max="max"
        @input="isMasked ? $emit('update:modelValue', $event.target.value) : isMasked = true"
    >
</template>
