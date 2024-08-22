import ColumnDefinition from "../../Models/ColumnDefinition.js";
import TableCellComponent from "../../Components/Table/TableCellComponent.vue";

export default {
    component: TableCellComponent,
    description: "Table cell from column",
    importStatement: "import { TableCellComponent } from 'Webilio-Vue/src/Components/Table';",
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