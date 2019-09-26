import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import PrimaryButton from './PrimaryButton.vue'
import Input from '../inputs/Input.vue'

storiesOf('PrimaryButton', module)
    .add('Large', () => {
        return {
            components: { PrimaryButton },
            template: '<PrimaryButton text="Click me"/>'

        }
    })
    .add('Regular', () => {
        return {
            components: { PrimaryButton },
            template: '<PrimaryButton regular text="Click me"/>'
        }
    })
    .add('Laoding', () => {
        return {
            components: { PrimaryButton },
            template: '<PrimaryButton isLoading text="Click me"/>'
        }
    })
    .add('With A URL', () => {
        return {
            components: { PrimaryButton },
            template: '<PrimaryButton url="/about" text="Click me"/>'
        }
    })
    .add('Form example', () => {
        return {
            components: { PrimaryButton, Input },
            template: '<div><PrimaryButton @click="handleSubmit" text="Click me"/><Input v-model="text"/></div>',
            data() {
                return {
                    text: ""
                }
            },
            methods: {
                handleSubmit() {
                    alert(this.text)
                }

            }
        }
    })