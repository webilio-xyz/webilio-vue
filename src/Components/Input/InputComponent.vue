<script setup>

import Checkbox from "./CheckboxComponent.vue";
import Toggle from "./ToggleComponent.vue";
import {computed, onMounted, ref} from "vue";
import Date from "./DateComponent.vue";
import TextInput from "./TextInputComponent.vue";
import {uniqueId} from "lodash-es";
import Select from "./SelectComponent.vue";
import Textarea from "./TextareaComponent.vue";

defineOptions({
  inheritAttrs: false
});

const props = defineProps({
  modelValue: String,
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
  <Checkbox
      v-if="type === 'checkbox'"
      v-bind="$attrs"
      :id="formGroupUniqueId"
      :name="name"
      :model-value="modelValue"
      :class="'size-10' + ' ' + customClass"
      :disabled="disabled"
      @update:model-value="emit('update:modelValue', $event)"
  />
  <div
      v-else-if="type === 'toggle'"
      class="h-10 flex items-center"
  >
    <Toggle
        v-bind="$attrs"
        :id="formGroupUniqueId"
        :name="name"
        :model-value="!!modelValue"
        size="15"
        :class="customClass"
        :disabled="disabled"
        @update:model-value="emit('update:modelValue', $event)"
    />
  </div>

  <Select
      v-else-if="type === 'select'"
      v-bind="$attrs"
      :id="formGroupUniqueId"
      :name="name"
      :model-value="modelValue"
      :class="'w-full' + ' ' + customClass"
      :options="options"
      :disabled="disabled"
      :multiple="multiple"
      :searchable="searchable"
      :taggable="taggable"
      :deselectable="deselectable"
      :preserveSearch="preserveSearch"
      @update:model-value="emit('update:modelValue', $event)"
      @tag="emit('tag', $event)"
  />
  <Textarea
      v-else-if="type === 'textarea'"
      v-bind="$attrs"
      :id="formGroupUniqueId"
      :name="name"
      :model-value="modelValue"
      :class="'w-full' + ' ' + customClass"
      :placeholder="placeholder"
      :disabled="disabled"
      @update:model-value="emit('update:modelValue', $event)"
  />
  <Date
      v-else-if="type === 'date'"
      v-bind="$attrs"
      :id="formGroupUniqueId"
      :name="name"
      :model-value="modelValue"
      :class="'w-full' + ' ' + customClass"
      :max="max"
      :min="min"
      :range="range"
      :enable-time-picker="enableTimePicker"
      :disabled="disabled"
      @update:model-value="emit('update:modelValue', $event)"
  />
  <TextInput
      v-else
      v-bind="$attrs"
      :id="formGroupUniqueId"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :model-value="modelValue"
      :disabled="disabled"
      :min="min"
      :max="max"
      :mask="maska"
      :precision="precision"
      :step="step"
      :class="'w-full' + ' ' + customClass"
      :input-class="inputClass"
      @update:model-value="emit('update:modelValue', $event)"
  >
      <template v-if="$slots.prefix" #prefix>
          <slot name="prefix" />
      </template>
      <template v-if="$slots.suffix" #suffix>
          <slot name="suffix" />
      </template>
  </TextInput>
</template>

<style scoped>

</style>
