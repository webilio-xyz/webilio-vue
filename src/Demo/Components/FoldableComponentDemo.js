import FoldableComponent from "../../Components/Component/FoldableComponent.vue";

export default {
    component: FoldableComponent,
    description: "Foldable ",
    importStatement: "import { FoldableComponent } from '@webilio-xyz/webilio-vue/Components';",
    slotsToDemo: {
        'header': {
            props: {
                'modelValue': 'Header',
            }
        },
        'content': {
            props: {
                'modelValue': 'Content',
            }
        },
    },
}