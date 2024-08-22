import {InputComponent} from "../../Components/Input/index.js";

export default {
    component: InputComponent,
    description: "Generic input with type handling",
    importStatement: "import { InputComponent } from 'Webilio-Vue/src/Components/Input';",
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