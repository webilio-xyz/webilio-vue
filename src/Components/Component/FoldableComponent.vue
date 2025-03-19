<script setup>
import { AkChevronRightSmall, AkChevronDownSmall } from '@kalimahapps/vue-icons';
import {ref} from "vue";

const props = defineProps({

})

const emit = defineEmits(['open', 'close']);

const close = () => {
    isOpen.value = false;
    emit('close');
}

const open = () => {
    isOpen.value = true;
    emit('open');
}

const isOpen = ref(false);
</script>

<template>
    <div>
        <div class="flex items-center space-x-2 w-full">
            <div>
                <AkChevronRightSmall
                    v-if="!isOpen"
                    class="text-2xl cursor-pointer"
                    @click="open"
                />
                <AkChevronDownSmall
                    v-else
                    class="text-2xl cursor-pointer"
                    @click="close"
                />
            </div>
            <div class="flex-grow">
                <slot name="header" />
            </div>
        </div>
        <div
            :class="{'h-0': !isOpen}"
            class="overflow-y-hidden duration-600 transition-all relative border-gray-500">
            <div

                class=" border-t-2 pt-4"
            >
                <div class="p-4 border-primary border-l-4">
                    <slot name="content" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>