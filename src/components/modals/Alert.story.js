import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Alert from './Alert.vue'

storiesOf('Alert', module)
    .add('Success', () => {
        return {
            components: { Alert },
            template: '<Alert success message="Watch out for turn two"/>'
        }
    })
    .add('Warning', () => {
        return {
            components: { Alert },
            template: '<Alert warning message="Watch out for turn two"/>'
        }
    })
    .add('Error', () => {
        return {
            components: { Alert },
            template: '<Alert  message="Watch out for turn two"/>'
        }
    })