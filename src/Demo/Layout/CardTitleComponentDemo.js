import CardTitleComponent from "../../Components/Layout/CardComponent.vue";

export default {
    component: CardTitleComponent,
    description: "Card title",
    importStatement: "import { CardTitleComponent } from 'webilio-vue/Layout';",
    slotsToDemo: {
        'default': {
            props: {
                'modelValue': 'Title',
            }
        },
    },

}