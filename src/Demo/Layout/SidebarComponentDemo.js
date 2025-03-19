import SidebarComponent from "../../Components/Layout/SidebarComponent.vue";

export default {
    component: SidebarComponent,
    description: "Sidebar",
    importStatement: "import { SidebarComponent } from '@webilio-xyz/webilio-vue/Layout';",
    propsToDemo: {
        'menu': {
            props: {
                'modelValue': [
                    {
                        'label': 'Dashboard',
                        'target': 'dashboard',
                        'type': 'ROUTE',
                        'icon': 'PhGauge',
                        'css_class': null,
                        'active': true,
                        'roles': [],
                        'children': [
                            {
                                'label': 'Users',
                                'target': 'admin.users.index',
                                'type': 'ROUTE',
                                'icon': 'UsersIcon',
                                'css_class': null,
                                'active': true,
                                'roles': [],
                                'permissions': [],
                            },
                        ],
                        'permissions': [],
                    },
                    {
                        'label': 'Users',
                        'target': 'admin.users.index',
                        'type': 'ROUTE',
                        'icon': 'UsersIcon',
                        'css_class': null,
                        'active': true,
                        'roles': [],
                        'permissions': [],
                    },
                    {
                        'label': 'Tenants',
                        'target': 'admin.tenants.index',
                        'type': 'ROUTE',
                        'icon': 'PhWindowsLogo',
                        'css_class': null,
                        'active': true,
                        'roles': [],
                        'children': [],
                        'permissions': [],
                    },
                    {
                        'label': 'Contacts',
                        'target': 'contacts.index',
                        'type': 'ROUTE',
                        'icon': 'PhAddressBook',
                        'css_class': null,
                        'active': true,
                        'roles': [],
                        'permissions': [],
                    },
                    {
                        'label': 'Permissions',
                        'target': 'admin.roles.index',
                        'type': 'ROUTE',
                        'icon': 'KeyIcon',
                        'css_class': null,
                        'active': true,
                        'roles': [],
                        'children': [],
                        'permissions': [],
                    },
                    {
                        'label': 'Horizon',
                        'target': 'horizon.index',
                        'type': 'ROUTE',
                        'icon': 'PresentationChartLineIcon',
                        'css_class': null,
                        'active': true,
                        'roles': [],
                        'children': [],
                        'permissions': [],
                    }
                ],
            }
        },
    },

}