import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Tab from './Tab.vue'

storiesOf('Tabs', module)
    .add('Two tabs', () => {
        return {
            components: { Tab },
            template: '<Tab numOfTabs=2><div>hello</div><div>hello2</div></Tab>'
        }
    })
    .add('One tab', () => {
        return {
            components: { Tab },
            template: '<Tab  />'
        }
    })
