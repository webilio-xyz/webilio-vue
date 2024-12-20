import ModalComponent from "../../Components/Modal/ModalComponent.vue";
import {ref} from "vue";

const show = ref(false);
const hasFooter = ref(false);
export default {
    component: ModalComponent,
    description: "Generic modal component",
    importStatement: "import { ModalComponent } from '@webilio-xyz/webilio-vue/Modal';",
    propsToDemo: {
        'show': {
            props: {
                'modelValue': show,
            }
        },
        'hasFooter': {
            props: {
                'modelValue': hasFooter,
            }
        },
    },
    slotsToDemo: {
        'title': {
            props:{
                'modelValue':'test'
            }
        },
        'content': {
            props: {
                'modelValue':'content'
            }
        },
        'footer': {
            props: {
                'modelValue':'footer'
            }
        },
    },
    events: {
        close: () => {
            show.value = false;
        }
    }

}