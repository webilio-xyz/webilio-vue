<script setup>
import {computed, ref, toRaw} from "vue";
import MenuItems from "./MenuItemsComponent.vue";
import {Link} from '@inertiajs/vue3';
import {forEach} from "lodash-es";
// import * as heroIcons from '@heroicons/vue/24/solid';
// import * as phosphorIcons from '@phosphor-icons/vue';
const props = defineProps({
    level: {
        type: Number,
        default: 0
    },
    item: {
        type: Object,
        required: true
    }
})

const hasSubmenu = computed(() => {
    return (props.item.children?.length ?? 0) > 0;
});

const hasIcon = computed(() => {
  return false;
  // TODO
    // return !!props.item.icon
});

// const icon = computed(() => {
//     if (props.item.icon.startsWith('Ph') && phosphorIcons[props.item.icon]) {
//         return phosphorIcons[props.item.icon];
//     }
//     return heroIcons[props.item.icon];
// });


const hrefLink = computed(() => {
    if (hasSubmenu.value) {
        return null;
    } else if(props.item.type === 'URL') {
        return props.item.target;
    } else if(props.item.type === 'ROUTE') {
        if(props.item.params) {
            return route(props.item.target, props.item.params);
        }
        // return route(props.item.target);
        return null
    } else {
        return null;
        //TODO
    }
})

const menuComponent = computed(() => {
    if (hasSubmenu.value) {
        return 'div';
    } else {
        return Link;
    }
})

const menuClicked = function() {
    if (hasSubmenu.value) {
        submenuOpen.value = !submenuOpen.value;
    }
}

const calculatedSize = computed(() => {
    let size = 1;
    for(let i = 0; i < props.level; i++) {
        size *= 0.75;
    }
    return `--menu-item-label-font-size: ${size}em;`
})

const isSelected = computed(() => {
    if (props.item.type === 'ROUTE') {
        // return route().current(props.item.target);
        return null;
    }

    if (hasSubmenu.value) {
        let submenuSelected = false;
        forEach(props.item.children, (child) => {
            if(child.type === 'ROUTE') {
                if (child.params) {
                    if (route().current(child.target, child.params)) {
                        submenuSelected = route().params === toRaw(child.params);
                    }
                } else {
                    submenuSelected = route().current(child.target);
                }
            }
        })

        return submenuSelected;
    }

    return false;
})

const submenuOpen = ref(isSelected.value);



const menuClass = computed(() => {
    let classes = {}
    classes['level-' + props.level] = true;

    return classes
})
</script>

<template>
    <component
        :is="menuComponent"
        :href="hrefLink"
        class="leading-14 cursor-pointer font-bold items-center"
        :class="menuClass"
        @click="menuClicked"
    >
        <div
            class="flex flex-row items-center pl-4 py-3 hover:bg-whiteOff border-t-0 border-b-0 h-14"
            :class="isSelected ? 'bg-whiteOff' : ''"
        >
            <span
                v-for="i in level"
                :key="i"
                class="w-4 h-4"
            />
            <span v-if="hasIcon">
                <component
                    :is="icon"
                    class="size-6 mr-2"
                    :class="isSelected ? 'text-danger' : 'text-graylight'"
                />
            </span>
            <span
                class="flex-grow menu-item-label"
                :style="calculatedSize"
                :class="isSelected ? 'text-blackDeep font-[700]' : 'text-grayDark font-[400]'"
            >
                {{ $t(item.label) }}
            </span>
            <span v-if="hasSubmenu">

                <!--AkChevronRightSmall
                    v-if="!submenuOpen"
                    class="text-lg"
                /-->
                <!--AkChevronDownSmall
                    v-else
                    class="text-lg"
                /-->
            </span>
            <span v-if="isSelected && !hasSubmenu">
                <!--AnFilledCaretLeft class="text-4xl -mr-7 text-white -my-2" /-->

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:svg="http://www.w3.org/2000/svg"
                    width="3"
                    height="56"
                    class="text-[63px]  text-danger h-full -my-0"
                >
                    <g class="layer">
                        <title>Layer 1</title>
                        <path
                            id="svg_1"
                            d="m0,-1l2,0l0,56l-2,0l0,-56z"
                            fill="#F9F9F9"
                        />
                        <path
                            id="svg_2"
                            d="m0.04,-0.19l0,56l3,0l0,-56l-3,0z"
                            fill="#E43D30"
                        />
                    </g>
                </svg>
            </span>
        </div>
    </component>
    <div v-if="submenuOpen">
        <MenuItems
            :menu="item.children"
            :level="level+1"
        />
    </div>
</template>

<style scoped>
    a {
        color: inherit;
    }
    a:hover {
        text-decoration: none;
    }

    .menu-item-label {
        font-size: var(--menu-item-label-font-size);
    }
</style>

