import AvatarComponent from "../../Components/Component/AvatarComponent.vue";

export default {
    component: AvatarComponent,
    description: "Avatar ",
    importStatement: "import { AvatarComponent } from '@webilio-xyz/webilio-vue/Components';",
    propsToDemo: {
        'name': {
            props: {
                'modelValue': 'John Doe',
            }
        },
        'size': {
            props: {
                'modelValue': 50,
            }
        },
        'initials': {
            props: {
                'modelValue': 'JD',
            }
        },
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
    },
}