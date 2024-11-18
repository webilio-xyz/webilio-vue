<script setup>
import { VueDoxen as OriginalVueDoxen } from 'vue-doxen';
import {flatten} from "flat";
import Components from "../Demo/index.js";
import {computed} from "vue";
import router from "../router/index.js";

const demos =  {
  'Inputs' : Components.Inputs,
  'Tables' : Components.Tables,
  'Layouts': Components.Layouts,
  'Modals': Components.Modals,
  'Components': Components.Components
};

const doxenFormattedDemos = flatten(demos, { maxDepth: 2 });

const selectedModel = computed(() => {
  return router.currentRoute?.value?.hash?.slice(1) ?? 'Inputs.CheckboxComponent';
})

</script>

<template>
  <OriginalVueDoxen
      :demos="doxenFormattedDemos"
      :model-value="selectedModel"
  />
</template>

<style scoped>

</style>