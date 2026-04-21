import {DateComponent} from "../../Components/Input/index.js";
import DoxenDate from "../../Doxen/DoxenDate.vue";

export default {
    component: DateComponent,
    description: "Date picker",
    importStatement: "import { DateComponent } from '@webilio-xyz/webilio-vue/Input';",
    propsToDemo: {
        'modelValue': {
            props: {
                'modelValue': '2026-04-21',
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