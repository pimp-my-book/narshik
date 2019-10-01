import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Badge from './Badge.vue'

storiesOf('Badge', module)
    .add('Green', () => {
        return {
            components: { Badge },
            template: '<Badge success>Order delivered</Badge>'
        }
    })
    .add('Orange ', () => {
        return {
            components: { Badge },

            template: '<Badge warning>Order delivered</Badge>'
        }
    })
    .add('Error ', () => {
        return {
            components: { Badge },

            template: '<Badge>Order delivered</Badge>'
        }
    })