import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Tab from './Tab.vue'

storiesOf('Tabs', module)
    .add('Two tabs', () => {
        return {
            components: { Tab },

            template: '<Tab twoTabs tabHeadingOne="tab 1" tabHeadingTwo="Tab 2"><template v-slot:tabOne>hello</template><template v-slot:tabTwo>hello2</template></Tab>'
        }
    })
    .add('One tab', () => {
        return {
            components: { Tab },
            template: '<Tab  tabHeadingOne="tab 1"/>'
        }
    })
