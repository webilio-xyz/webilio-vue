import {CheckboxComponent} from "../../Components/Input/index.js";

export default {
    component: CheckboxComponent,
    description: "Checkbox",
    importStatement: "import { CheckboxComponent } from 'Webilio-Vue/src/Components/Input';",
    propsToDemo: {
        'checked': {
            props: {
                'modelValue': false,
            }
        },
    },

}