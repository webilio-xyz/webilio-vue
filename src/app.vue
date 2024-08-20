<template>
  <div class="flex flex-row max-w-full">
    <DoxenSidebar
        v-model="selectedDemo"
        :demos="demos"
        class="border max-h-screen overflow-y-auto min-h-screen flex-none"
    />
    <VueDoxen
        v-model="selectedDemo"
        :demos="demos"
        class="p-6 flex-grow max-w-full"
    />

    <link
        href="https://unpkg.com/highlightjs/styles/ir-black.css"
        rel="stylesheet"
        type="text/css"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { DoxenSidebar, VueDoxen } from 'vue-doxen';
// OPTIONAL: CSS file for minor layout/affordance improvements
import 'vue-doxen/vue-doxen.css';
import "./index.css"

import Components from "./Components/index.js";


defineOptions({
  name: 'DocumentationPage'
});

const selectedDemo = ref('ComponentA');

const demos = computed(() => {
  return {
    ...Components.Inputs
  };
});
</script>