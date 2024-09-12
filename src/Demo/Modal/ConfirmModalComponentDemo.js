import ModalComponent from "../../Components/Modal/ModalComponent.vue";
import {ref} from "vue";
import ConfirmModalComponent from "../../Components/Modal/ConfirmModalComponent.vue";

const show = ref(false);
export default {
    component: ConfirmModalComponent,
    description: "Modal with confirm button",
    importStatement: "import { ConfirmModalComponent } from from '@webilio-xyz/webilio-vue/Modal';",
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