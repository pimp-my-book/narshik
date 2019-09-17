import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import DisplaySmall from './DisplaySmall.vue'

storiesOf('Display Small', module)
    .add('Small Heading', () => {
        return {
            components: { DisplaySmall },
            template: '<DisplaySmall text="Let me warn you.."/>'
        }
    })