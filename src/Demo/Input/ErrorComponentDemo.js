import {ErrorComponent} from "../../Components/Input/index.js";

export default {
    component: ErrorComponent,
    description: "Error message for inputs",
    importStatement: "import { ErrorComponent } from 'Webilio-Vue/src/Components/Input';",
    propsToDemo: {
        'message': {
            props: {
                'modelValue': 'This is an error message',
            }
        },
    },

}