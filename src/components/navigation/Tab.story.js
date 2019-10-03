import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Tab from './Tab.vue'

storiesOf('Tabs', module)
    .add('Two tabs', () => {
        return {
            components: { Tab },
            template: '<Tab numOfTabs=2 />'
        }
    })
    .add('One tab', () => {
        return {
            components: { Tab },
            template: '<Tab  />'
        }
    })
