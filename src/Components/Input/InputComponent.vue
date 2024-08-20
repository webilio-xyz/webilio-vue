<script setup>

import Checkbox from "./CheckboxComponent.vue";
import Toggle from "./ToggleComponent.vue";
import {computed, onMounted, ref} from "vue";
import Date from "./DateComponent.vue";
import TextInput from "./TextInputComponent.vue";
import {uniqueId} from "lodash-es";

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
  }
});

const emit = defineEmits(['update:modelValue']);

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
      :id="formGroupUniqueId"
      :name="name"
      :model-value="modelValue"
      class="size-10"
      :disabled="disabled"
      @update:model-value="emit('update:modelValue', $event)"
  />
  <div
      v-else-if="type === 'toggle'"
      class="h-10 flex items-center"
  >
    <Toggle
        :id="formGroupUniqueId"
        :name="name"
        :model-value="!!modelValue"
        size="15"
        :disabled="disabled"
        @update:model-value="emit('update:modelValue', $event)"
    />
  </div>

  <Select
      v-else-if="type === 'select'"
      :id="formGroupUniqueId"
      :name="name"
      :model-value="modelValue"
      class="w-full"
      :options="options"
      :disabled="disabled"
      :multiple="multiple"
      @update:model-value="emit('update:modelValue', $event)"
  />
  <Textarea
      v-else-if="type === 'textarea'"
      :id="formGroupUniqueId"
      :name="name"
      :model-value="modelValue"
      class="w-full"
      :disabled="disabled"
      @update:model-value="emit('update:modelValue', $event)"
  />
  <Date
      v-else-if="type === 'date'"
      :id="formGroupUniqueId"
      :name="name"
      :model-value="modelValue"
      class="w-full"
      :max="max"
      :min="min"
      :range="range"
      :disabled="disabled"
      @update:model-value="emit('update:modelValue', $event)"
  />
  <TextInput
      v-else
      :id="formGroupUniqueId"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :model-value="modelValue"
      :disabled="disabled"
      :min="min"
      :max="max"
      :mask="maska"
      class="w-full"
      @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<style scoped>

</style>