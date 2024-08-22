<script>
import {uniqueId} from "lodash-es";
import {DateComponent} from "../Components/Input/index.js";

export default {
  components: {DateComponent},
  props: {
    modelValue: {
      default: null
    },
  },
  computed: {
    identifier() {
      return uniqueId(`VueDoxen_${this.key}_thyscn_`);
    },
    key() {
      return this.$.vnode.key;
    }
  }
}
</script>

<template>
  <fieldset class="" data-applied-style-tokens="formFieldFieldset" data-style-tokens="formFieldFieldset"
            :data-value="key">
    <legend class="" data-applied-style-tokens="formFieldLegend"
            data-style-tokens="formFieldLegend formFieldLegendDisabled formFieldLegendError">
      <label class=""
             :for="identifier"
             data-applied-style-tokens="formFieldLabel"
             data-style-tokens="formFieldLabel">
        {{ key }}:
      </label>
    </legend>
    <div class="" data-applied-style-tokens="formFieldTextFieldContainer"
         data-style-tokens="formFieldTextFieldContainer">
      <DateComponent
          class="" data-applied-style-tokens="formFieldTextField"
          data-style-tokens="formFieldTextField formFieldTextFieldError"
          :id="identifier" aria-invalid="false"
          aria-required="false"
          :data-test="identifier" :data-value="modelValue"
          :modelValue="modelValue"
          @update:modelValue="$emit('update:modelValue', $event)"
      />
    </div>
  </fieldset>
</template>

<style scoped>

</style>