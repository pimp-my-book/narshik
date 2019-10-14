import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Modal from './Modal.vue'

storiesOf('Modal', module)
    .add('Simple example', () => {
        return {
            components: { Modal },
            template: `<Modal>
            <template v-slot:header>
            Hello
            </template>
            <template v-slot:body>
            This is the modal's body
            </template>
            </Modal>
            `
        }
    })