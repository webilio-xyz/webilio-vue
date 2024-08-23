<script setup>
import {onMounted, onUnmounted, ref, watch} from 'vue';
import {XMarkIcon} from "@heroicons/vue/24/solid/index.js";
import ModalComponent from "./ModalComponent.vue";
import CardComponent from "../Layout/CardComponent.vue";
import CardTitleComponent from "../Layout/CardTitleComponent.vue";
import ButtonComponent from "../Component/ButtonComponent.vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  closeable: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: 'w-1/5',
  },
  title: {
    type: String,
    default: 'Are you sure?',
  },
  confirmMessage: {
    type: String,
    default: 'Are you sure?',
  },
  confirmText: {
    type: String,
    default: 'Confirm',
  },
  cancelText: {
    type: String,
    default: 'Cancel',
  }
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close', false);
};
const confirm = () => {
  emit('close', true);
};

</script>

<template>
  <ModalComponent :show="show" @close="close" :width="width">
    <template #title>
      <CardTitleComponent>{{ $t(title) }}</CardTitleComponent>
    </template>
    <template #content>
      <div class="flex m-4 text-left">
        <p>{{ $t(confirmMessage) }}</p>
      </div>
      <div class="flex justify-end border-t space-x-3 pt-4">
        <ButtonComponent @click="close">{{ $t(cancelText) }}</ButtonComponent>
        <ButtonComponent color="red" @click="confirm">{{ $t(confirmText) }}</ButtonComponent>
      </div>
    </template>
  </ModalComponent>
</template>
