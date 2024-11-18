<script setup>

import {isArray} from "lodash-es";
import logo from "../Assets/Logo_webilio.png";
import {RouterLink} from "vue-router";
import router from "../router/index.js";
const props = defineProps({
  demos: {
    type: Array,
    default: []
  },
  modelValue: {
    type: String,
    default: null
  }
})

const isComponent = function(comp) {
  if (!comp) {
    return false;
  }
  return typeof comp.__name !== "undefined";
};

const isActive = function(key) {
  return router.currentRoute.value.name === `components.${key}`;
}

</script>

<template>
    <div data-applied-style-tokens="sidebarContainer" data-style-tokens="sidebarContainer">
      <div data-applied-style-tokens="sidebarLogo" data-style-tokens="sidebarLogo">
        <img :src="logo" />
      </div>
      <template v-for="(demo, index) in props.demos">
        <template v-if="!isComponent(demo)">
          <div data-applied-style-tokens="sidebarSection" data-style-tokens="sidebarSection">
            <div data-applied-style-tokens="sidebarSectionTitle" data-style-tokens="sidebarSectionTitle">
              {{ index }}
            </div>
            <RouterLink
                v-for="(subDemo, subIndex) in demo"
                :to="{
                  hash: `#${index}.${subIndex}`,
                }"

                :key="'sidebar-link-' + subIndex"
                data-style-tokens="sidebarButton"
                :data-applied-style-tokens="isActive(`${index}.${subIndex}`) ? 'sidebarButtonSelected sidebarButton' : 'sidebarButton'"
            >
              {{ subIndex }}
            </RouterLink>
          </div>

          <hr />
        </template>
        <RouterLink
            v-else data-applied-style-tokens="sidebarButton" data-style-tokens="sidebarButton"
            :to="{
                  name: `components.${index}`,
                }"
            :key="'sidebar-link-' + index"
        >
          {{ index }}
        </RouterLink>
      </template>
    </div>
</template>

<style scoped>

</style>