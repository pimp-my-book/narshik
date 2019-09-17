import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import DisplayXLarge from './DisplayXLarge.vue'

storiesOf('Display X Large', module)
    .add('Xtra large Heading', () => {
        return {
            components: { DisplayXLarge },
            template: '<DisplayXLarge text="mickale"/>'
        }
    })