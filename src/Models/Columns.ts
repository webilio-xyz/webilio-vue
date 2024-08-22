import ColumnDefinition from "./ColumnDefinition";
import {forEach} from "lodash-es";
export default class Columns {
    public columns = [];

    constructor(columns = []) {
        forEach(columns, column => {
            this.addColumn(column);
        })
    }
    addColumn(column: ColumnDefinition) {
        if (!column.order) {
            column.order = this.columns?.length;
        }

        this.columns.push(column);
    }
};
