import {TextareaComponent} from "../../Components/Input/index.js";

export default {
    component: TextareaComponent,
    description: "Textarea input",
    importStatement: "import { TextareaComponent } from 'webilio-vue/Input';",
    propsToDemo: {
        'modelValue': {
            props: {
                'modelValue': 'This is a textarea',
            }
        },
    },

}