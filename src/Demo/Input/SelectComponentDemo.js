import {SelectComponent} from "../../Components/Input/index.js";

export default {
    component: SelectComponent,
    description: "Select with filtering and multiple options",
    importStatement: "import { SelectComponent } from 'Webilio-Vue/src/Components/Input';",
    propsToDemo: {
        'options': {
            props: {
                'modelValue': [{
                    'label': 'Option 1',
                    'value': 1
                },{
                    'label': 'Option 2',
                    'value': 2
                }],
            }
        },
        'max': {
            props: {
                'modelValue': null,
            }
        },
    },

}