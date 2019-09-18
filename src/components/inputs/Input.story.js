import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Input from './Input.vue'

storiesOf('Input', module)
    .add('Basicm Example', () => {
        return {
            components: { Input },
            template: '<Input placeholder="Type in me"/>'
        }
    })