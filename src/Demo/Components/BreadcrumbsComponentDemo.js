import BreadcrumbsComponent from "../../Components/Component/BreadcrumbsComponent.vue";

export default {
    component: BreadcrumbsComponent,
    description: "Breadcrumbs ",
    importStatement: "import { BreadcrumbsComponent } from '@webilio-xyz/webilio-vue/Components';",
    propsToDemo: {
        'items': {
            props: {
                'modelValue': [
                    {name:'Home', href: '#', active: true},
                    {name:'About', href: '#', active: false},
                    {name:'Contact', href: '#', active: false},
                ],
            }
        },
        'activeItemColor': {
            props: {
                'modelValue': '#ffffc0',
            }
        },
        'hoverItemColor': {
            props: {
                'modelValue': 'lightsalmon',
            }
        },
    },
}