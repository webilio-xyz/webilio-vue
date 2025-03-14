import { createRouter, createWebHistory } from 'vue-router';
import VueDoxen from "../Doxen/VueDoxen.vue";

const routes = [
    // ...other routes,
    {
        // Create the path for the URL
        path: '/:pathMatch(.*)*',
        // Give it an optional name
        name: 'home',
        // You could point to VueDoxen directly or a wrapper component
        component: VueDoxen,
    },
];

// Create the router
const router = createRouter({
    // Use the correct history mode for your project
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    let hash = to.hash.slice(1) ?? 'Inputs.CheckboxComponent';
    hash = hash.split('.').pop();
    document.title = hash ? `${hash} - Webilio-Vue` : 'Webilio-Vue';
    next();
})

// Export the router
export default router;