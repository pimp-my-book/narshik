import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import DisplayLarge from './DisplayLarge.vue'

storiesOf('Display Large', module)
    .add('large Heading', () => {
        return {
            components: { DisplayLarge },
            template: '<DisplayLarge text="I`m lost but not found"/>'
        }
    })