import {SelectComponent} from "../../Components/Input/index.js";

export default {
    component: SelectComponent,
    description: "Select with filtering and multiple options",
    importStatement: "import { SelectComponent } from '@webilio-xyz/webilio-vue/Input';",
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
    slotsToDemo: {
        'maxElements': {
            props: {
                'modelValue': null,
            }
        },
        'noResult': {
            props: {
                'modelValue': null,
            }
        },
        'noOptions': {
            props: {
                'modelValue': null,
            }
        },
        'tag': {
            props: {
                'modelValue': null,
            }
        },
        'beforeList': {
            props: {
                'modelValue': null,
            }
        },
        'afterList': {
            props: {
                'modelValue': null,
            }
        },
        'caret': {
            props: {
                'modelValue': null,
            }
        },
        'singleLabel': {
            props: {
                'modelValue': null,
            }
        },
        'placeholder': {
            props: {
                'modelValue': null,
            }
        },
        'limit': {
            props: {
                'modelValue': null,
            }
        },
        'clear': {
            props: {
                'modelValue': null,
            }
        },
        'selection': {
            props: {
                'modelValue': null,
            }
        },
    },
}