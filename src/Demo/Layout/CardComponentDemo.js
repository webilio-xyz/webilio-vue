import CardComponent from "../../Components/Layout/CardComponent.vue";

export default {
    component: CardComponent,
    description: "Card",
    importStatement: "import { CardComponent } from 'Webilio-Vue/src/Components';",
    slotsToDemo: {
        'default': {
            props: {
                'modelValue': 'Content',
            }
        },
    },

}