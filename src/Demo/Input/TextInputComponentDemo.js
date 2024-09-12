import {TextInputComponent} from "../../Components/Input/index.js";

export default {
    component: TextInputComponent,
    description: "HTML input with maska support",
    importStatement: "import { TextInputComponent } from 'webilio-vue/Input';",
    propsToDemo: {
        'modelValue': {
            props: {
                'modelValue': 'This is text',
            }
        },
        'min': {
            props: {
                'modelValue': null,
            }
        },
        'max': {
            props: {
                'modelValue': null,
            }
        },
        'mask': {
            props: {
                'modelValue': null,
            }
        },
    },

}