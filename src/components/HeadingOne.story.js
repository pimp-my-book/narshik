import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import HeadingOne from './HeadingOne.vue'

storiesOf('Heading One', module)
    .add('A heading ', () => '<HeadingOne :text="mickale"/>')