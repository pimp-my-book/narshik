import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Input from './Input.vue'

storiesOf('Input', module)
    .add('Basic Example', () => {
        return {
            components: { Input },
            template: '<Input placeholder="Type in me"/>'
        }
    })