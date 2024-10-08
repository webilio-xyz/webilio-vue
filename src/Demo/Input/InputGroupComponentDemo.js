import {InputGroupComponent} from "../../Components/Input/index.js";

export default {
    component: InputGroupComponent,
    description: "Input group for input with label and error message",
    importStatement: "import { InputGroupComponent } from '@webilio-xyz/webilio-vue/Input';",
    propsToDemo: {
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
    },

}