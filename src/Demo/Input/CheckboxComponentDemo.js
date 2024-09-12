import {CheckboxComponent} from "../../Components/Input/index.js";

export default {
    component: CheckboxComponent,
    description: "Checkbox",
    importStatement: "import { CheckboxComponent } from '@webilio-xyz/webilio-vue/Input';",
    propsToDemo: {
        'checked': {
            props: {
                'modelValue': false,
            }
        },
    },

}