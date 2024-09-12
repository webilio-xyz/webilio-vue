
import Columns from "../../Models/Columns.ts";
import ColumnDefinition from "../../Models/ColumnDefinition.js";
import TableComponent from "../../Components/Table/TableComponent.vue";
import TableHeaderComponent from "../../Components/Table/TableHeaderComponent.vue";

export default {
    component: TableHeaderComponent,
    description: "Table header from columns",
    importStatement: "import { TableHeaderComponent } from 'webilio-vue/Table';",
    propsToDemo: {
        'columns': {
            props: {
                'modelValue': new Columns([
                    new ColumnDefinition({name: 'Id', key: 'id'}),
                    new ColumnDefinition({name: 'Name', key: 'name'}),
                ]),
            }
        },
    },

}