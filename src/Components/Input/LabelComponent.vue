<script setup>
defineProps({
    value: String,
    isRequired: {
      type: Boolean,
      default: false
    }
});
</script>

<template>
    <label class="block font-medium text-sm text-gray-700">
        <span v-if="value">{{ value }}<sup v-if="isRequired" class="text-red-600">*</sup></span>
        <span v-else><slot /></span>
    </label>
</template>
