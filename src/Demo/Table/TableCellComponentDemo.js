import ColumnDefinition from "../../Models/ColumnDefinition.js";
import TableCellComponent from "../../Components/Table/TableCellComponent.vue";

export default {
    component: TableCellComponent,
    description: "Table cell from column",
    importStatement: "import { TableCellComponent } from 'webilio-vue/Table';",
    propsToDemo: {
        'column': {
            props: {
                'modelValue': new ColumnDefinition({name: 'Id', key: 'id'}),
            }
        },
        'data': {
            props: {
                'modelValue': {
                    'id': 1
                },
            }
        },
    },

}