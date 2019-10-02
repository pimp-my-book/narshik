import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Tab from './Tab.vue'

storiesOf('Alert', module)
    .add('Success', () => {
        return {
            components: { Tab },
            template: '<Tab/>'
        }
    })
