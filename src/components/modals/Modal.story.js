import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Modal from './Modal.vue'
import PrimaryButton from '../buttons/PrimaryButton.vue'

storiesOf('Modal', module)
    .add('Simple example', () => {
        return {
            components: { Modal, PrimaryButton },
            data: {

                isModalVisible: false
            },
            methods: {
                showModal() {
                    this.isModalVisible = true
                },
                closeModal() {
                    this.isModalVisible = false
                }
            }
            ,
            template: `
            <PrimaryButton
            text="open modal"
            />
            
            <Modal>
            <template v-slot:header>
            Hello
            </template>
            <template v-slot:body>
            This is the modal's body
            </template>
            <template v-slot:footer>
            this is the modal's footer
            </template>
            </Modal>
            `
        }
    })