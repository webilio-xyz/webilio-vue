import ModalComponent from "../../Components/Modal/ModalComponent.vue";
import {ref} from "vue";

const show = ref(false);
export default {
    component: ModalComponent,
    description: "Generic modal component",
    importStatement: "import { ModalComponent } from 'Webilio-Vue/src/Components/Modal';",
    propsToDemo: {
        'show': {
            props: {
                'modelValue': show,
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
    },
    events: {
        close: () => {
            show.value = false;
        }
    }

}