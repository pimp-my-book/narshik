import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import SecondaryButton from './SecondaryButton.vue'

storiesOf('Secondary Button', module)
    .add('Large', () => {
        return {
            components: { SecondaryButton },
            template: '<SecondaryButton text="Click me"/>'
        }
    })
    .add('Regular', () => {
        return {
            components: { SecondaryButton },
            template: '<SecondaryButton regular text="Click me"/>'
        }
    })
    .add('Laoding', () => {
        return {
            components: { SecondaryButton },
            template: '<SecondaryButton isLoading text="Click me"/>'
        }
    })
    .add('With A URL', () => {
        return {
            components: { SecondaryButton },
            template: '<SecondaryButton url="/about" text="Click me"/>'
        }
    })