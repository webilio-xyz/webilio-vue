import MenuItemComponent from "../../Components/Layout/MenuItemComponent.vue";

export default {
    component: MenuItemComponent,
    description: "MenuItem",
    importStatement: "import { MenuItemComponent } from '@webilio-xyz/webilio-vue/Layout';",
    propsToDemo: {
        'item': {
            props: {
                'modelValue': new Object(
                    {
                        'label': 'Dashboard',
                        'target': '/',
                        'type': 'ROUTE',
                        'icon': 'PhGauge',
                        'css_class': null,
                        'active': true,
                        'roles': [],
                        'children': [],
                        'permissions': [],
                    },
                ),
            }
        },
    },

}