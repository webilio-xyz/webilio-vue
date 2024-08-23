import ModalComponent from "../../Components/Modal/ModalComponent.vue";
import {ref} from "vue";
import ConfirmModalComponent from "../../Components/Modal/ConfirmModalComponent.vue";

const show = ref(false);
export default {
    component: ConfirmModalComponent,
    description: "Modal with confirm button",
    importStatement: "import { ConfirmModalComponent } from 'Webilio-Vue/src/Components/ConfirmModalComponent';",
    propsToDemo: {
        'show': {
            props: {
                'modelValue': show,
            }
        },
    },
    events: {
        close: () => {
            show.value = false;
        }
    }

}