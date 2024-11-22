<script setup>
import {computed, useSlots} from "vue";
</script>

<template>
  <button class="btn px-4 py-2">
    <slot />
  </button>
</template>
