<template>
  <div class="flex flex-row max-w-full">
    <DoxenSidebar
        v-model="selectedDemo"
        :demos="demos"
        class="border max-h-screen overflow-y-auto min-h-screen flex-none"
    />
    <VueDoxen
        v-model="selectedDemo"
        :demos="doxenFormattedDemos"
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
import {computed, onBeforeMount, onMounted, ref, watch} from 'vue';
import { VueDoxen } from 'vue-doxen';
import 'vue-doxen/vue-doxen.css';
import "./index.css"

import Components from "./Demo/index.js";
import DoxenSidebar from "./Doxen/DoxenSidebar.vue";
import {flatten} from "flat";


defineOptions({
  name: 'DocumentationPage'
});

const selectedDemo = ref('ComponentA');

const demos = computed(() => {
  return {
    'Inputs' : Components.Inputs,
    'Tables' : Components.Tables,
  };
});

onBeforeMount(() => {
  if (window.location.hash) {
    selectedDemo.value = window.location.hash.slice(1);
  }
});

watch(selectedDemo, () => {
  window.history.replaceState(null, '', '#' + selectedDemo.value);
});

const doxenFormattedDemos = computed(() => {
  return flatten(demos.value, { maxDepth: 2 });
});
</script>