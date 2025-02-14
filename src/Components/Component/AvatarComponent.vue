<script setup>
import {computed} from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        default: 10
    },
    initials: {
        type: String,
        default: ''
    },
    backgroundColor: {
        type: String,
        default: '#e0e0e0'
    },
    textColor: {
        type: String,
        default: '#000000'
    }
});


const computedInitials = computed(() => {
    if (props.initials) {
        return props.initials;
    } else {
        if (!props.name) {
            return '';
        }
        const names = props.name.split(' ');
        return names[0]?.charAt(0) + names[1]?.charAt(0);
    }
});

const getAvatarStyle = () => {
    return {
        width: props.size + 'px',
        height: props.size + 'px',
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        fontSize: props.size / 2 + 'px'
    };
};
</script>

<template>
    <abbr
        :title="name"
        class="no-underline rounded-full bg-gray-200 flex justify-center items-center text-gray-500 p-2"
        :class="computedSizeClass"
        :style="getAvatarStyle()"
    >
        {{ computedInitials }}
    </abbr>
</template>
