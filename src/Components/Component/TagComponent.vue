<script setup>

const props = defineProps({
  backgroundColor: {
    type: String,
    default: '#e0e0e0'
  },
  textColor: {
    type: String,
    default: '#000000'
  },
  text: {
    type: String,
    required: true
  },
  borderRadius: {
    type: String,
    default: '4px'
  }
});
</script>

<template>
  <div
    :style="{
      backgroundColor: props.backgroundColor,
      color: props.textColor,
      borderRadius: props.borderRadius
    }"
    class="px-4 py-2 inline-block"
  >
    {{ props.text }}
  </div>
</template>

<style scoped>

</style>