<script setup>
import MenuItem from "./MenuItemComponent.vue";
import {computed} from "vue";
import {forEach} from "lodash-es";
// import {hasPermission, hasRole} from "@/Plugins/Permissions.js";

const props = defineProps({
    menu: {
        type: Array,
        required: true
    },
    level: {
        type: Number,
        default: 0,
    }
})

const activeMenuItems = computed(() => {
    return props.menu?.filter((menuItem) => menuItem.active);
})

const hasAccess = (menuItem) => {
    let hasValidPermission = true;
    let hasValidRole = true;
    if (menuItem) {
        if (menuItem.permissions && menuItem.permissions.length > 0) {
            hasValidPermission = false;
            forEach(menuItem.permissions, (permission) => {
                if (hasPermission(permission)) {
                    hasValidPermission = true;
                }
            })
        }

        if (menuItem.roles && menuItem.roles.length > 0) {
            hasValidRole = false;
            forEach(menuItem.roles, (role) => {
                if (hasRole(role)) {
                    hasValidRole = true;
                }
            })
        }
    }

    return hasValidPermission && hasValidRole;
}

</script>

<template>
    <div class="flex flex-col space-y-2 test">
        <template v-for="(menuItem, i) in activeMenuItems">
            <MenuItem
                v-if="hasAccess(menuItem)"
                :key="i"
                :item="menuItem"
                :level="level"
            />
        </template>
    </div>
</template>

<!-- <template>
    <div class="flex flex-col space-y-2">
        <template v-for="(menuItem, i) in activeMenuItems" :key="i">
            <MenuItem
                :item="menuItem"
                :level="level"
            />
        </template>
    </div>
</template> -->
