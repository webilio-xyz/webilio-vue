<script setup>
import { ref, computed, onMounted } from "vue";
import { ErrorComponent } from "@webilio-xyz/webilio-vue/Input";
import LabelComponent from "../Input/LabelComponent.vue";
import { uniqueId } from "lodash-es";
import { ArrowUpTrayIcon } from '@heroicons/vue/24/solid'
import ButtonComponent from "./ButtonComponent.vue";

const emit = defineEmits(["file-selected", "file-removed"]);

const props = defineProps({
    label: {
        type: String,
        default: () => 'Choose the File'
    },
    name: String,
    accept: String,
    disabled: {
        type: Boolean,
        default: false
    },
    error: {
        type: String,
        default: () => ''
    },
    required: {
        type: Boolean,
        default: false
    },
    maxSizeInMegaBytes: {
        type: Number,
        default: 10 // in MB
    },
    multiple: {
        type: Boolean,
        default: false
    },
});

const files = ref([]);
const fileInput = ref(null);
const formGroupUniqueId = ref(null);
const computedError = ref(null);

const fileType = (file) => (file ? file.type : "");
const fileSize = (file) => {
    if (file) {
        if (file.size > 1024 * 1024) {
            return (file.size / 1024 / 1024).toFixed(2) + " MB";
        } else {
            return (file.size / 1024).toFixed(2) + " KB";
        }
    }
    return "";
};

onMounted(() => {
    formGroupUniqueId.value = uniqueId('input_group_');
});

const validateFile = (file) => {
    const acceptList = props.accept.split(',').map(ext => ext.trim());
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const maxSizeInBytes = props.maxSizeInMegaBytes * 1024 * 1024;

    if (!acceptList.includes(`.${fileExtension}`)) {
        computedError.value = `Invalid file type. Accepted types are: ${props.accept}`;
        return false;
    }

    if (file.size > maxSizeInBytes) {
        computedError.value = `File size exceeds the maximum limit of ${props.maxSizeInMegaBytes} MB.`;
        return false;
    }

    computedError.value = null;
    return true;
};

const onFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter(validateFile);
    files.value = props.multiple ? [...files.value, ...validFiles] : validFiles;
    validFiles.forEach(file => emit("file-selected", file));
    resetFileInput();
};

const onDrop = (event) => {
    const droppedFiles = Array.from(event.dataTransfer.files);
    const validFiles = droppedFiles.filter(validateFile);
    files.value = props.multiple ? [...files.value, ...validFiles] : validFiles;
    validFiles.forEach(file => emit("file-selected", file));
    resetFileInput();
};

const triggerFileInput = () => {
    fileInput.value.click();
};

const removeFile = (index) => {
    const removedFile = files.value.splice(index, 1)[0];
    emit("file-removed", removedFile);
    resetFileInput();
};

const resetFileInput = () => {
    fileInput.value.value = null;
};

const displayError = computed(() => {
    return props.error || computedError.value;
});

</script>

<template>
    <div class="w-full space-y-4">
        <LabelComponent
            :for="formGroupUniqueId"
            :value="label"
            :required="required"
            class="w-full"
        />
        <div
            class="flex flex-col items-start justify-start w-full border-2 border-dashed border-gray-300 p-2 cursor-pointer hover:border-gray-400 space-y-4"
            @drop.prevent="onDrop"
            @dragover.prevent
        >
            <div class="flex items-center w-full">
                <ButtonComponent class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" @click="triggerFileInput">
                    {{ $t('Browse') }}
                </ButtonComponent>
                <span class="ml-2 text-gray-500">{{ $t('or drop your file here') }}</span>
            </div>
            <input
                :id="formGroupUniqueId"
                ref="fileInput"
                :name="name"
                :accept="accept"
                :disabled="disabled"
                :multiple="multiple"
                type="file"
                class="hidden"
                @change="onFileSelect"
            >
            <ErrorComponent
                v-if="displayError"
                class="mt-2"
                :message="displayError"
            />
        </div>
        <div v-if="files.length" class="flex flex-col space-y-2 w-full">
            <div v-for="(file, index) in files" :key="index" class="flex items-center justify-between w-full">
                <div class="flex items-center">
                    <ArrowUpTrayIcon class="bg-danger text-white rounded-full w-6 h-6 p-1 m-1" />
                    <div class="flex flex-col">
                        <span class="font-semibold text-gray-800">
                            {{ file.name }}
                        </span>
                        <span class="text-sm text-gray-500">{{ fileType(file) }} · {{ fileSize(file) }}</span>
                    </div>
                </div>
                <ButtonComponent type="primary" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" @click="removeFile(index)">
                    {{ $t('Remove') }}
                </ButtonComponent>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>