import {DateComponent} from "../../Components/Input/index.js";
import DoxenDate from "../../Doxen/DoxenDate.vue";

export default {
    component: DateComponent,
    description: "Date picker",
    importStatement: "import { DateComponent } from 'Webilio-Vue/src/Components/Input';",
    propsToDemo: {
        'modelValue': {
            props: {
                'modelValue': null,
            }
        },
        'min': {
            component: DoxenDate,
            props: {
                'modelValue': null,
            }
        },
        'max': {
            component: DoxenDate,
            props: {
                'modelValue': null,
            }
        },
    },

}