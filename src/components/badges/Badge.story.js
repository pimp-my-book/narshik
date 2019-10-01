import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Badge from './Badge.vue'

storiesOf('Badge', module)
    .add('Green', () => {
        return {
            components: { Badge },
            template: '<Badge>Order delivered</Badge>'
        }
    })