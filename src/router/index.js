import { createRouter, createWebHistory } from 'vue-router';
import { VueDoxen } from 'vue-doxen';

import {computed} from "vue";
import Components from "../Demo/index.js";
import {flatten} from "flat";
import {forEach} from "lodash-es";


const demos =  {
    'Inputs' : Components.Inputs,
    'Tables' : Components.Tables,
    'Layouts': Components.Layouts,
    'Modals': Components.Modals,
    'Components': Components.Components
};

const doxenFormattedDemos = flatten(demos, { maxDepth: 2 });

const routes = [
    // ...other routes,
    {
        // Create the path for the URL
        path: '/',
        // Give it an optional name
        name: 'home',
        // You could point to VueDoxen directly or a wrapper component
        component: VueDoxen,
        redirect: to => {
            // the function receives the target route as the argument
            // we return a redirect path/location here.
            return { path: '/components/' + 'Inputs.TextInputComponent' };
        },
    },
];

forEach(demos, (demoCategoryComponents, demoCategoryName) => {
    forEach(demoCategoryComponents, (component, componentName) => {
        routes.push({
            path: `/components/${demoCategoryName}/${componentName}`,
            name: `components.${demoCategoryName}.${componentName}`,
            component: VueDoxen,
            props: (route) => ({
                demos: doxenFormattedDemos,
                modelValue: `${demoCategoryName}.${componentName}`,
            }),
            meta: {
                title: `${componentName}`
            }
        })
    })
})

// Create the router
const router = createRouter({
    // Use the correct history mode for your project
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? `${to.meta.title} - Webilio-Vue` : 'Webilio-Vue';
    next();
})

// Export the router
export default router;