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

// Clamp currentStep between 0 and steps.length
const clampedCurrentStep = computed(() => {
  return Math.min(Math.max(props.currentStep, 0), props.steps.length);
});

// Calculate the progress percentage: full bar between steps
const progressPercentage = computed(() => {
  const totalSegments = props.steps.length - 1;
  if (totalSegments === 0) return 0;

  // Each completed step corresponds to 100% / totalSegments
  const percentage = (clampedCurrentStep.value / totalSegments) * 100;

  // Ensure it never exceeds 100%
  return Math.min(percentage, 100);
});
</script>

<template>
  <div class="w-full">
    <div class="relative flex items-center justify-between w-full">
      <!-- Steps -->
      <div
        v-for="(step, index) in props.steps"
        :key="index"
        class="flex flex-col items-center"
      >
        <div
          :class="[
            'flex items-center justify-center h-12 w-12 text-gray-500 text-xl font-medium rounded-full bg-white border-4 transition-colors duration-500 ease-in-out',
            {
              [circleBorderColor]: index < clampedCurrentStep,
              'text-blue-500': index < clampedCurrentStep,
              'border-gray-300': index >= clampedCurrentStep
            }
          ]"
        >
          {{ index + 1 }}
        </div>
        <span class="mt-2 text-sm text-gray-500">{{ step }}</span>
      </div>

      <!-- Progress Bar -->
      <div class="absolute left-0 w-full h-1 bg-gray-300 -z-10 transform -translate-y-1/2" :style="{ top: '32%' }">
        <div class="h-full transition-all duration-500 ease-in-out" :class="progressBarColor" :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>
  </div>
</template>
