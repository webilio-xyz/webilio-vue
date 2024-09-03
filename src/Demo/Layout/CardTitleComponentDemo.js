import CardTitleComponent from "../../Components/Layout/CardComponent.vue";

export default {
    component: CardTitleComponent,
    description: "Card title",
    importStatement: "import { CardTitleComponent } from 'Webilio-Vue/src/Components';",
    slotsToDemo: {
        'default': {
            props: {
                'modelValue': 'Title',
            }
        },
    },

}