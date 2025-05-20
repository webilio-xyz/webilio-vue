<script setup>
import {computed} from 'vue';
import Multiselect from 'vue-multiselect';
import {map} from "lodash-es";

const emit = defineEmits(['update:modelValue', 'tag'])

const props = defineProps({
  modelValue: {},
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: () => null,
  },
  max: {
    type: Number,
    default: null
  },
  multiple: {
    type: Boolean,
    default: false
  },
  openDirection: {
    type: String,
    default: 'bottom'
  },
  closeOnSelect: {
    type: Boolean,
    default: true
  },
  searchable: {
    type: Boolean,
    default: true
  },
  deselectable: {
    type: Boolean,
    default: true
  },
  groupSelect: {
    type: Boolean,
    default: false
  },
  groupValues: {
    type: String,
    default: null
  },
  groupLabel: {
    type: String,
    default: 'label'
  },
  taggable: {
    type: Boolean,
    default: false
  }
});

const proxyValue = computed({
  get() {
    if (Array.isArray(props.modelValue)) {
      return computedOptions.value.filter(option => props.modelValue.includes(option?.value));
    }
    return computedOptions.value.find(option => option?.value === props.modelValue);
  },

  set(option) {
    if (!props.deselectable && option === null) {
      return;
    }

    if (!props.multiple) {
      emit('update:modelValue', option?.value);
    } else {
      const values = map(option, (item) => item?.value);
      emit('update:modelValue', values);
    }
  },
});

const computedOptions = computed(() => {
  return map(props?.options, (option) => {
    if (typeof option === 'string') {
      return {
        label: option,
        value: option
      }
    }
    return option;
  }) ?? [];
});

const remove = (option) => {
  if (props.deselectable) {
    let newValue = undefined;
    if(props.multiple){
      const optionValue = option?.value;
      const values = map(proxyValue.value ?? [], (item) => item?.value);
      newValue = values.filter((item) => {
        return item !== optionValue;
      });
    }
    emit('update:modelValue', newValue);
  }
}

const addTag = (newTag) => {
  emit('tag', newTag);
}

</script>
<template>
  <Multiselect
      id="value"
      v-model="proxyValue"
      class="wv-input wv-select-input border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
      :options="computedOptions"
      :placeholder="placeholder ?? $t('select.placeholder')"
      :multiple="multiple"
      :max="max"
      :open-direction="openDirection"
      :close-on-select="closeOnSelect"
      label="label"
      :searchable="searchable"
      :show-labels="false"
      :group-select="groupSelect"
      :group-values="groupValues"
      :group-label="groupLabel"
      :taggable="taggable"
      @tag="addTag"
      @remove="remove"
  >
    <template #maxElements>
      {{ $tChoice('select.maxElements', max) }}
    </template>
    <template #noResult>
      {{ $t('select.noResult') }}
    </template>
    <template #noOptions>
      {{ $t('select.noOptions') }}
    </template>
  </Multiselect>
</template>

<style>
@import "vue-multiselect/dist/vue-multiselect.css";

.multiselect__option--highlight {
  @apply bg-primary-500;
  background: theme('colors.primary.500');
}

.multiselect__option--selected {
  @apply bg-gray-200;
  background: theme('colors.gray.300');
}

.multiselect__option--selected.multiselect__option--highlight {
  @apply bg-red-400;
  background: theme('colors.red.400');
}
</style>
