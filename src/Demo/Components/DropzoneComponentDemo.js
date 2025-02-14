import DropzoneComponent from "../../Components/Component/DropzoneComponent.vue";

export default {
    component: DropzoneComponent,
    description: "Dropzone Component",
    importStatement: "import { DropzoneComponent } from '@webilio-xyz/webilio-vue/Components';",
    propsToDemo: {
        'label': {
            props: {
                'modelValue': 'Choose the File'
            }
        },
        'name': {
            props: {
                'modelValue': 'file'
            }
        },
        'accept': {
            props: {
                'modelValue': '.jpg,.png,.pdf'
            }
        },
        'disabled': {
            props: {
                'modelValue': false
            }
        },
        'error': {
            props: {
                'modelValue': ''
            }
        },
        'required': {
            props: {
                'modelValue': false
            }
        },
        'maxSizeInMegaBytes': {
            props: {
                'modelValue': 10
            }
        },
        'multiple': {
            props: {
                'modelValue': false
            }
        }
    }
}