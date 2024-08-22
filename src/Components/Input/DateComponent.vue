<script setup>
import {computed, onMounted, ref} from 'vue';
import {trans, isLoaded, getActiveLanguage} from "laravel-vue-i18n";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const localizedFormat = computed(() => {
  if (isLangLoaded.value) {
    let format = trans('date.format').toString();
    if (format === 'date.format') {
      format = 'yyyy-MM-dd';
    }
    return format;
  }
  return null;
});

const isLangLoaded = ref(false);

onMounted(() => {
  const a = setInterval(() => {
    if (isLoaded()) {
      isLangLoaded.value = true;
      clearInterval(a);
    }
  }, 50);
})

const locale = computed(() => {
  return getActiveLanguage();
})

const props = defineProps({
  modelValue: String,
  'min': {
    type: String,
    default: null
  },
  max: {
    type: String,
    default: null
  },
  clearable: {
    type: Boolean,
    default: true
  },
  range: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['update:modelValue']);

const onChange = (e) => {
  emits('update:modelValue', e);
};
</script>

<template>
  <VueDatePicker
      v-if="localizedFormat"
      :model-value="modelValue"
      :disabled="disabled"
      :min-date="min"
      :max-date="max"
      :enable-time-picker="false"
      :format="localizedFormat"
      :locale="locale"
      :range="range"
      :select-text="$t('Select')"
      :cancel-text-text="$t('Cancel')"
      :now-button-label="$t('Now')"
      :time-picker="false"
      :auto-apply="true"
      :partial-flow="true"
      @update:model-value="onChange($event)"
  />
</template>