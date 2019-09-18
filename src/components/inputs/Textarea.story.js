import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Textarea from './Textarea.vue'

storiesOf('Textarea', module)
    .add('Basic Example', () => {
        return {
            components: { Textarea },
            template: '<Textarea />'
        }
    })