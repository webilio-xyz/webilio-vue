
import Columns from "../../Models/Columns.ts";
import ColumnDefinition from "../../Models/ColumnDefinition.js";
import TableRowComponent from "../../Components/Table/TableRowComponent.vue";

export default {
    component: TableRowComponent,
    description: "Table row",
    importStatement: "import { TableRowComponent } from 'Webilio-Vue/src/Components/Table';",
    propsToDemo: {
        'columns': {
            props: {
                'modelValue': new Columns([
                    new ColumnDefinition({name: 'id', key: 'id'}),
                    new ColumnDefinition({name: 'name', key: 'name'}),
                ]),
            }
        },
        'data': {
            props: {
                'modelValue': {
                    'id': 1,
                    'name': 'John'
                },
            }
        }
    },

}