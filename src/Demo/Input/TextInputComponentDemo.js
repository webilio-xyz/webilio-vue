import {TextInputComponent} from "../../Components/Input/index.js";

export default {
    component: TextInputComponent,
    description: "HTML input with maska support",
    importStatement: "import { TextInputComponent } from '@webilio-xyz/webilio-vue/Input';",
    propsToDemo: {
        'modelValue': {
            props: {
                'modelValue': 'This is text',
            }
        },
        'type': {
            props: {
                'type': 'string',
                'modelValue': 'text',
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
        'precision': {
            props: {
                'type': 'number',
                'precision': 0,
                'modelValue': '3',
            }
        },
        'step': {
            props: {
                'type': 'number',
                'modelValue': '0.01',
            }
        },
    },
    slotsToDemo: {
        'prefix': {
            props: {
                'modelValue': null,
            }
        },
        'suffix': {
            props: {
                'modelValue': null,
            }
        },
    },

}