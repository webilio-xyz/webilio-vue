<script setup>

import {isArray} from "lodash-es";
import logo from "../Assets/Logo_webilio.png";
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

const emit = defineEmits(['update:modelValue']);

const isComponent = function(comp) {
  if (!comp) {
    return false;
  }
  return typeof comp.__name !== "undefined";
};

const updateValue = function(value) {
  emit('update:modelValue', value);
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
            <button v-for="(subDemo, subIndex) in demo" @click="updateValue(index + '.' +subIndex)" data-applied-style-tokens="sidebarButton" data-style-tokens="sidebarButton">
              {{ subIndex }}
            </button>
          </div>

          <hr />
        </template>
        <button v-else @click="updateValue(index)" data-applied-style-tokens="sidebarButton" data-style-tokens="sidebarButton">
          {{ index }}
        </button>
      </template>
    </div>
</template>

<style scoped>

</style>