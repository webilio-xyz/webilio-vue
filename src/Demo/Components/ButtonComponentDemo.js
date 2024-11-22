import ButtonComponent from "../../Components/Component/ButtonComponent.vue";

export default {
    component: ButtonComponent,
    description: "Button ",
    importStatement: "import { ButtonComponent } from '@webilio-xyz/webilio-vue/Components';",
    propsToDemo: {
        'class': {
            props: {
                'modelValue': "bg-blue-500 hover:bg-blue-700 text-white",
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