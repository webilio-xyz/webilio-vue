<script setup>
import {computed, onMounted, ref, useAttrs} from 'vue';
import {uniqueId} from "lodash-es";
import ErrorComponent from "./ErrorComponent.vue";
import InputComponent from "./InputComponent.vue";
import LabelComponent from "./LabelComponent.vue";

defineOptions({
  inheritAttrs: false
});

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
  },
  inputClass: {
    type: [String, Array, Object],
    default: null
  },
  preserveSearch: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'tag']);

const attrs = useAttrs();

const inputAttrs = computed(() => {
  const result = {};
  for (const [key, value] of Object.entries(attrs)) {
    if (key.startsWith('input-')) {
      result[key.slice(6)] = value;
    }
  }
  return result;
});

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
  <div :class="{ 'error': errors !== null && errors !== ''}" class="w-full">
    <LabelComponent
        :for="formGroupUniqueId"
        :required="required"
        :value="label"
        class="w-full mb-2"
    >
      {{ label }}
    </LabelComponent>

    <InputComponent
        :id="formGroupUniqueId"
        v-bind="inputAttrs"
        :custom-class="customClass"
        :deselectable="deselectable"
        :disabled="disabled"
        :enable-time-picker="enableTimePicker"
        :input-class="inputClass"
        :mask="maska"
        :max="max"
        :min="min"
        :model-value="modelValue ?? null"
        :multiple="multiple"
        :name="name"
        :options="options"
        :placeholder="placeholder"
        :precision="precision"
        :range="range"
        :searchable="searchable"
        :step="step"
        :taggable="taggable"
        :type="type"
        :preserveSearch="preserveSearch"
        @tag="emit('tag', $event)"
        @update:model-value="emit('update:modelValue', $event)"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix"/>
      </template>
      <template v-if="$slots.suffix" #suffix>
        <slot name="suffix"/>
      </template>
    </InputComponent>

    <ErrorComponent
        v-if="errors"
        :message="errors"
        class="mt-2"
    />
  </div>
</template>
