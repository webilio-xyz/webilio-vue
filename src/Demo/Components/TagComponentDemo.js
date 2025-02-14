import TagComponent from "../../Components/Component/TagComponent.vue";

export default {
    component: TagComponent,
    description: "Tag ",
    importStatement: "import { TagComponent } from '@webilio-xyz/webilio-vue/Components';",
    propsToDemo: {
        'backgroundColor': {
            props: {
                'modelValue': '#ffcc00',
            }
        },
        'textColor': {
            props: {
                'modelValue': '#ffffff',
            }
        },
        'text': {
            props: {
                'modelValue': 'Example Tag',
            }
        },
        'borderRadius': {
            props: {
                'modelValue': '8px',
            }
        },
    },
}