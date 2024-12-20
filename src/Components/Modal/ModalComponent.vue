<script setup>
import {computed, onMounted, onUnmounted, ref, watch} from 'vue';
import {XMarkIcon} from "@heroicons/vue/24/solid/index.js";

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
    width: {
        type: String,
        default: 'w-1/2',
    },
    hasFooter: {
        type: Boolean,
        default: false,
    },
    footerPosition: {
      type: String,
      default: 'end',
      validator: (value) => ['left', 'center', 'end'].includes(value)
    }
});

const emit = defineEmits(['close']);
const dialog = ref();
const showSlot = ref(props.show);

watch(() => props.show, () => {
    if (props.show) {
        document.body.style.overflow = 'hidden';
        showSlot.value = true;
        dialog.value?.showModal();
    } else {
        document.body.style.overflow = null;
        setTimeout(() => {
            dialog.value?.close();
            showSlot.value = false;
        }, 200);
    }
});

const close = () => {
    if (props.closeable) {
        emit('close');
    }
};

const closeOnEscape = (e) => {
    if (e.key === 'Escape') {
        e.preventDefault();

        if (props.show) {
            close();
        }
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));

onUnmounted(() => {
    document.removeEventListener('keydown', closeOnEscape);
    document.body.style.overflow = null;
});

const footerPositionClass = computed(() => {
  switch (props.footerPosition) {
    case 'left':
      return 'justify-start';
    case 'center':
      return 'justify-center';
    case 'end':
      return 'justify-end';
    default:
      return 'justify-end';
  }
});

</script>

<template>
    <dialog
        ref="dialog"
        class="z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent"
    >
        <div
            class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50"
            scroll-region
        >
            <transition
                enter-active-class="ease-out duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="ease-in duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div
                    v-show="show"
                    class="fixed inset-0 transform transition-all"
                    @click="close"
                >
                    <div class="absolute inset-0 bg-gray-500 opacity-75" />
                </div>
            </transition>

            <transition
                enter-active-class="ease-out duration-300"
                enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                leave-active-class="ease-in duration-200"
                leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                <div
                    v-show="show"
                    class="mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:mx-auto"
                    :class="props.width"
                >
                    <template v-if="showSlot">
                      <div class="border-b">
                        <div class="flex items-center px-4 py-3">
                          <div class="flex-grow text-xl font-bold">
                            <slot name="title" />
                          </div>
                          <div v-if="closeable">
                            <XMarkIcon
                                class="w-5 h-5 cursor-pointer"
                                @click="close"
                            />
                          </div>
                        </div>
                      </div>

                        <div class="flex flex-col space-y-2">
                          <div class="p-6">
                            <slot name="content" />
                          </div>

                          <div v-if="hasFooter" class="border-t px-4 py-3 flex" :class="footerPositionClass">
                            <slot name="footer" />
                          </div>
                        </div>
                    </template>
                </div>
            </transition>
        </div>
    </dialog>
</template>
