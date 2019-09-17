import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import HeadingOne from './HeadingOne.vue'
require('../assets/tailwind.css')
storiesOf('Heading One', module)
    .add('Heading', () => {
        return {
            components: { HeadingOne },
            template: '<HeadingOne text="mickale"/>'
        }
    })