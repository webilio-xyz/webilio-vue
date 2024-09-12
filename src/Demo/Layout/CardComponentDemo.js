import CardComponent from "../../Components/Layout/CardComponent.vue";

export default {
    component: CardComponent,
    description: "Card",
    importStatement: "import { CardComponent } from 'webilio-vue/Layout';",
    slotsToDemo: {
        'default': {
            props: {
                'modelValue': 'Content',
            }
        },
    },

}