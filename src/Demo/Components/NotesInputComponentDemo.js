import NotesInputComponent from "../../Components/Component/NotesInputComponent.vue";

export default {
    component: NotesInputComponent,
    description: "Notes Input ",
    importStatement: "import { NotesInputComponent } from '@webilio-xyz/webilio-vue/Components';",
    propsToDemo: {
        'avatar': {
            props: {
                'modelValue': {
                    name: 'Jane Doe',
                    size: 50,
                    initials: 'JD',
                    backgroundColor: '#ffcc00',
                    textColor: '#ffffff'
                },
            }
        },
        'inputPlaceholder': {
            props: {
                'modelValue': 'Write a comment...',
            }
        },
    },
}