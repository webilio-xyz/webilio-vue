
import Columns from "../../Models/Columns.ts";
import ColumnDefinition from "../../Models/ColumnDefinition.js";
import TableComponent from "../../Components/Table/TableComponent.vue";

export default {
    component: TableComponent,
    description: "Table",
    importStatement: "import { TableComponent } from '@webilio-xyz/webilio-vue/Table';",
    propsToDemo: {
        'columns': {
            props: {
                'modelValue': new Columns([
                    new ColumnDefinition({name: 'Id', key: 'id'}),
                    new ColumnDefinition({name: 'Name', key: 'name'}),
                ]),
            }
        },
        'data': {
            props: {
                'modelValue': [
                    {
                        'id': 1,
                        'name': 'John'
                    },
                    {
                        'id': 2,
                        'name': 'Doe'
                    },
                ],
            }
        },
        'isLoading': {
            props: {
                'modelValue': false,
            }
        },
    },

}