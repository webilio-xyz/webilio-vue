
import Columns from "../../Models/Columns.ts";
import ColumnDefinition from "../../Models/ColumnDefinition.js";
import TablePaginationComponent from "../../Components/Table/TablePaginationComponent.vue";

export default {
    component: TablePaginationComponent,
    description: "Table pagination",
    importStatement: "import { TablePaginationComponent } from '@webilio-xyz/webilio-vue/Table';",
    propsToDemo: {
        'lastPage': {
            props: {
                'modelValue': 10,
            }
        }
    },

}