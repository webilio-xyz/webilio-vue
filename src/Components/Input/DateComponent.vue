<script setup>
import {computed, onMounted, ref} from 'vue';
import {trans, isLoaded, getActiveLanguage} from "laravel-vue-i18n";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import TextInputComponent from "./TextInputComponent.vue";
import { parse, format, parseISO } from 'date-fns';
import {fromZonedTime} from "date-fns-tz";

const localizedFormat = computed(() => {
  let formatString = 'yyyy/MM/dd';
  if(isLangLoaded.value) {
    try{
      const translatedFormat = trans('date.format').toString();
      const parsedDate = parse('29/10/1989', 'P', new Date());
      format(parsedDate, translatedFormat);
      formatString = translatedFormat;
    } catch (e) {
      //do nothing
    }
  }

  return formatString;
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

defineProps({
  modelValue: String,
  min: String,
  max: String,
  enableTimePicker: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: true
  },
  range: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    required: false
  }
});

const emits = defineEmits(['update:modelValue']);

const fixUTCDate = (date) => {
  if (!date) return null;

  //check if date is an array
  if(Array.isArray(date)) {
    return date.map((d) => {
      return fromZonedTime(date, Intl.DateTimeFormat().resolvedOptions().timeZone);
    })
  }else{
    return fromZonedTime(date, Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
}

const updateModelValue = (value) => {
  emits('update:modelValue', value);
}

</script>

<template>
  <VueDatePicker
      v-if="localizedFormat"
      class="print:hidden wv-input wv-date-input"
      :model-value="fixUTCDate(modelValue)"
      :min-date="fixUTCDate(min)"
      :max-date="fixUTCDate(max)"
      :enable-time-picker="enableTimePicker"
      :format="localizedFormat"
      :locale="locale"
      :range="range"
      :select-text="$t('Select')"
      :cancel-text-text="$t('Cancel')"
      :now-button-label="$t('Now')"
      :time-picker="false"
      :auto-apply="true"
      :partial-flow="true"
      :placeholder="placeholder"
      @update:model-value="updateModelValue"
  />
  <TextInputComponent
      class="hidden print:block w-full wv-input wv-date-input"
      :model-value="modelValue"
  />
</template>

<style scoped>
:deep(.dp__input_wrap > .dp__input) {
  @apply border-gray-300 focus:border-primary-500 focus:ring-primary-500 rounded-md shadow-sm disabled:bg-gray-200 py-2;
}
</style>
