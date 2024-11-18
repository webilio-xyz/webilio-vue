export default class ColumnDefinition {
    name = '';
    key = '';
    formatter = null;
    render = null;
    type = 'text';
    sortable = false;
    filterable = false;
    visible = true;
    order = 0;
    size = 'auto'
    className = '';
    thClassName = '';
    tdClassName = '';
    trClassName = '';
    constructor({name, key, formatter, type, sortable, filterable, visible, order, render, size, className, thClassName, tdClassName, trClassName} = {}) {
        if (name) {
            this.name = name;
        }

        if (key) {
            this.key = key;
        }

        if (formatter && typeof formatter === 'function') {
            this.formatter = formatter;
        }

        if (typeof type === 'string') {
            this.type = type;
        }

        if (typeof sortable === 'boolean') {
            this.sortable = sortable;
        }

        if (typeof filterable === 'boolean') {
            this.filterable = filterable;
        }

        if (typeof visible === 'boolean') {
            this.visible = visible;
        }

        if (typeof order === 'number') {
            this.order = order;
        }

        if (render && typeof render === 'function') {
            this.render = render;
        }

        if (typeof size !== "undefined") {
            this.size = size.toString();
        }

        if (typeof className === "string") {
            this.className = className;
        }

        if (typeof thClassName === "string") {
            this.thClassName = thClassName;
        }

        if (typeof tdClassName === "string") {
            this.tdClassName = tdClassName;
        }
    }
}
