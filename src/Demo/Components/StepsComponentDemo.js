import StepsComponent from "../../Components/Component/StepsComponent.vue";

export default {
    component: StepsComponent,
    description: "Steps ",
    importStatement: "import { StepsComponent } from '@webilio-xyz/webilio-vue/Components';",
    propsToDemo: {
        'steps': {
            props: {
                'modelValue': ['Step 1', 'Step 2', 'Step 3'],
            }
        },
        'currentStep': {
            props: {
                'modelValue': 1,
            }
        },
        'progressBarColor': {
            props: {
                'modelValue': 'bg-blue-500',
            }
        },
        'circleBorderColor': {
            props: {
                'modelValue': 'border-blue-500',
            }
        },
    },
}