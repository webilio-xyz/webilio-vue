<script setup>
import {computed} from 'vue';

const emit = defineEmits(['update:checked', 'update:modelValue']);

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  }
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
      :disabled="disabled"
      class="wv-input wv-checkbox-input rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 disabled:bg-gray-400 disabled:text-gray-400"
      type="checkbox"
  >
</template>
