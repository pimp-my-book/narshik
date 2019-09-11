import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import HeadingOne from './HeadingOne.vue'

storiesOf('Heading One', module)
    .add('Heading', () => {
        return {
            components: { HeadingOne },
            template: '<HeadingOne text="mickale"/>'
        }
    })