<script setup>
defineProps({
    value: String,
    required: {
      type: Boolean,
      default: false
    }
});
</script>

<template>
    <label class="wv-label block font-medium text-sm text-gray-700">
        <span v-if="value">{{ value }}<sup v-if="required" class="text-red-600">*</sup></span>
        <span v-else><slot /><sup v-if="required" class="text-red-600">*</sup></span>
    </label>
</template>
