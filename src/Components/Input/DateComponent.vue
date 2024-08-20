<script setup>
import {computed, onMounted, ref} from 'vue';
import {trans, isLoaded, getActiveLanguage} from "laravel-vue-i18n";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Checkbox from "./CheckboxComponent.vue";

const localizedFormat = computed(() => {
    if(isLangLoaded.value) {
        return trans('date.format').toString();
    }
    return null;
});

const isLangLoaded = ref(false);

onMounted(() => {
    const a = setInterval(() => {
        if(isLoaded()) {
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
    min: String,
    max: String,
    clearable: {
        type: Boolean,
        default: true
    },
    range: {
        type: Boolean,
        default: false
    }
});

const emits = defineEmits(['update:modelValue']);

</script>

<template>
    <VueDatePicker
        v-if="localizedFormat"
        :model-value="modelValue"
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
        @update:model-value="emits('update:modelValue', $event)"
    />
</template>