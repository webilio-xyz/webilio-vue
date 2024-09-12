import ButtonComponent from "../../Components/Component/ButtonComponent.vue";

export default {
    component: ButtonComponent,
    description: "Button ",
    importStatement: "import { ButtonComponent } from 'webilio-vue/Components';",
    propsToDemo: {
        'textColor': {
            props: {
                'modelValue': null,
            }
        },
    },
    slotsToDemo: {
        'default': {
            props: {
                'modelValue': 'Button',
            }
        },
    },

}