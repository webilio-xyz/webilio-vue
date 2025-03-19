<script setup>

import {onBeforeUnmount, onMounted, ref} from "vue";
import {throttle} from "lodash-es";

const infiniteScroller = ref(null);

const $emit = defineEmits(['scroll']);

const positionReached = throttle(() => {
    $emit('scroll');
}, 500)

const onScroll = () => {

    const scrollPositionRequired = infiniteScroller.value.scrollTop + infiniteScroller.value.clientHeight - window.innerHeight;
    const currentScrollPosition = document.documentElement.scrollTop;

    if (scrollPositionRequired <= currentScrollPosition) {
        positionReached();
    }
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <div ref="infiniteScroller">
        <slot />
    </div>
</template>

<style scoped>

</style>