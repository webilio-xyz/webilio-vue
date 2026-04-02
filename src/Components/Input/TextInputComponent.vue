<script setup>
import { onMounted, ref, computed} from 'vue';
import { vMaska } from "maska/vue";
const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    modelValue: String,
    min: String,
    max: String,
    mask: {
        type: String,
        default: null
    },
    precision: {
        type: Number,
        default: null
    },
    step: {
        type: [String, Number],
        default: null
    },
    inputClass: {
        type: [String, Array, Object],
        default: null
    }
});

const emit = defineEmits(['update:modelValue']);

const isNumeric = computed(() => props.type === 'number');

const inputType = computed(() => {
    if (isNumeric.value && props.precision !== null) return 'text';
    return props.type;
});

const inputMode = computed(() => {
    if (isNumeric.value && props.precision !== null) return 'decimal';
    return null;
});

const computedStep = computed(() => {
    if (props.step) return props.step;
    if (props.precision !== null) return Math.pow(10, -props.precision).toFixed(props.precision);
    return null;
});

const clampValue = (value) => {
    if (!isNumeric.value || value === '' || value === '-' || value === '.' || value === '-.') return value;
    const num = parseFloat(value);
    if (isNaN(num)) return value;
    if (props.min !== null && num < parseFloat(props.min)) return props.min;
    if (props.max !== null && num > parseFloat(props.max)) return props.max;
    return value;
};

const onInput = (event) => {
    let value = event.target.value;

    if (isNumeric.value && props.precision !== null) {
        const regex = new RegExp(`^-?\\d*\\.?\\d{0,${props.precision}}$`);
        if (value !== '' && value !== '-' && value !== '.' && value !== '-.' && !regex.test(value)) {
            event.target.value = props.modelValue || '';
            return;
        }
    }

    value = clampValue(value);
    event.target.value = value;
    emit('update:modelValue', value);
};

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <div class="wv-text-input-wrapper flex items-center border border-gray-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 rounded-md shadow-sm">
        <div v-if="$slots.prefix" class="wv-text-input-prefix flex items-center pl-2">
            <slot name="prefix" />
        </div>
        <input
            ref="input"
            v-maska="mask"
            :type="inputType"
            :inputmode="inputMode"
            :class="['wv-input wv-text-input flex-1 border-0 focus:ring-0 disabled:bg-gray-200 px-1', inputClass]"
            :value="modelValue"
            :min="min"
            :max="max"
            :step="computedStep"
            @input="onInput"
        >
        <div v-if="$slots.suffix" class="wv-text-input-suffix flex items-center pr-2">
            <slot name="suffix" />
        </div>
    </div>
</template>
