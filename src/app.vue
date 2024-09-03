<template>
  <div class="flex flex-row max-w-full">
    <aside>
      <nav>
        <DoxenSidebar :demos="demos" />
      </nav>
    </aside>
    <main>
      <RouterView />
    </main>

    <link
        href="https://unpkg.com/highlightjs/styles/ir-black.css"
        rel="stylesheet"
        type="text/css"
    />
  </div>
</template>

<script setup>
import {computed} from 'vue';
import 'vue-doxen/vue-doxen.css';
import "./index.css"

import Components from "./Demo/index.js";
import DoxenSidebar from "./Doxen/DoxenSidebar.vue";


defineOptions({
  name: 'DocumentationPage'
});

const demos = computed(() => {
  return {
    'Inputs' : Components.Inputs,
    'Tables' : Components.Tables,
    'Layouts': Components.Layouts,
    'Modals': Components.Modals,
    'Components': Components.Components
  };
});

</script>