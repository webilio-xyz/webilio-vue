import InertiaTableComponent from "../../Components/Table/InertiaTableComponent.vue";
import Columns from "../../Models/Columns.ts";
import ColumnDefinition from "../../Models/ColumnDefinition.js";

export default {
    component: InertiaTableComponent,
    description: "Table with Inertia adapter",
    importStatement: "import { InertiaTableComponent } from '@webilio-xyz/webilio-vue/Table';",
    propsToDemo: {
        'columns': {
            props: {
                'modelValue': new Columns([
                    new ColumnDefinition({name: 'Id', key: 'id'}),
                ]),
            }
        },
    },

}