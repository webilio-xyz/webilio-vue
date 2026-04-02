<script setup>
import {computed, onMounted, ref} from 'vue';
import { uniqueId} from "lodash-es";
import ErrorComponent from "./ErrorComponent.vue";
import InputComponent from "./InputComponent.vue";
import LabelComponent from "./LabelComponent.vue";

const props = defineProps({
    modelValue: String,
    label: String,
    type: {
        type: String,
        default: 'text',
    },
    name: String,
    value: {},
    disabled: {
        type: Boolean,
        default: false
    },
    options: {
        type: Array,
        default: () => []
    },
    placeholder: String,
    min: {
        type: [null, String],
        default: null
    },
    max: {
      type: [null, String],
        default: null
    },
    errors: {
        type: String,
        default: () => null
    },
    range: {
        type: Boolean,
        default: false
    },
    multiple: {
        type: Boolean,
        default: false
    },
    searchable: {
      type: Boolean,
      default: true
    },
    required: {
        type: Boolean,
        default: false
    },
    taggable: {
        type: Boolean,
        default: false
    },
    enableTimePicker: {
        type: Boolean,
        default: false
    },
    deselectable: {
        type: Boolean,
        default: true
    },
    customClass: {
      type: String,
      default: ''
    },
    precision: {
        type: Number,
        default: null
    },
    step: {
        type: [String, Number],
        default: null
    }
});

const emit = defineEmits(['update:modelValue', 'tag']);

const formGroupUniqueId = ref(null);

onMounted(() => {
    formGroupUniqueId.value = uniqueId('input_group_');
});

const maska = computed(() => {
    if (props.type === 'tel') {
        return '(###) ###-####'
    }
    return null;
})
</script>

<template>
    <div class="w-full" :class="{ 'error': errors !== null && errors !== ''}">
        <LabelComponent
            :for="formGroupUniqueId"
            :value="label"
            :required="required"
            class="w-full mb-2"
        >
          {{label}}
        </LabelComponent>

        <InputComponent
            :id="formGroupUniqueId"
            :name="name"
            :type="type"
            :model-value="modelValue ?? null"
            :disabled="disabled"
            :multiple="multiple"
            :options="options"
            :max="max"
            :min="min"
            :range="range"
            :mask="maska"
            :searchable="searchable"
            :placeholder="placeholder"
            :taggable="taggable"
            :deselectable="deselectable"
            :enable-time-picker="enableTimePicker"
            :custom-class="customClass"
            :precision="precision"
            :step="step"
            @update:model-value="emit('update:modelValue', $event)"
            @tag="emit('tag', $event)"
        >
            <template v-if="$slots.prefix" #prefix>
                <slot name="prefix" />
            </template>
            <template v-if="$slots.suffix" #suffix>
                <slot name="suffix" />
            </template>
        </InputComponent>

        <ErrorComponent
            v-if="errors"
            class="mt-2"
            :message="errors"
        />
    </div>
</template>
