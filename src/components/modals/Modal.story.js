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
            </Modal>
            `
        }
    })