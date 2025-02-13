<script setup>
import { computed } from "vue";

const props = defineProps({
  steps: {
    type: Array,
    required: true
  },
  currentStep: {
    type: Number,
    default: 0
  },
  progressBarColor: {
    type: String,
    default: 'bg-blue-500'
  },
  circleBorderColor: {
    type: String,
    default: 'border-blue-500'
  }
});

const clampedCurrentStep = computed(() => {
  return Math.min(Math.max(props.currentStep, 0), props.steps.length);
});

const progressPercentage = computed(() => {
  return ((clampedCurrentStep.value) / (props.steps.length)) * 100;
});
</script>

<template>
  <div class="w-full">
    <div class="relative flex items-center justify-between w-full">
      <div
        v-for="(step, index) in props.steps"
        :key="index"
        class="flex flex-col items-center"
      >
        <div
          :class="['flex items-center justify-center h-12 w-12 text-gray-500 text-xl font-medium rounded-full bg-white border-4 transition-colors duration-500 ease-in-out', { [circleBorderColor]: index < clampedCurrentStep, 'text-blue-500': index < clampedCurrentStep, 'border-gray-300': index >= clampedCurrentStep }]"
        >
          {{ index + 1 }}
        </div>
        <span class="mt-2 text-sm text-gray-500">{{ step }}</span>
      </div>
      <div class="absolute left-0 w-full h-1 bg-gray-300 -z-10 transform -translate-y-1/2" :style="{ top: '32%' }">
        <div class="h-full transition-width duration-500 ease-in-out" :class="progressBarColor" :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>
  </div>
</template>