import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import PrimaryButton from './PrimaryButton.vue'

storiesOf('PrimaryButton', module)
    .add('Basic Example', () => {
        return {
            components: { PrimaryButton },
            template: '<PrimaryButton text="Click me"/>'
        }
    })