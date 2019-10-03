import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Badge from './Badge.vue'

storiesOf('Badge', module)
    .add('Green', () => {
        return {
            components: { Badge },
            template: '<Badge green><template v-slot:text>Order delivered</template></Badge>'
        }
    })
    .add('Orange ', () => {
        return {
            components: { Badge },

            template: '<Badge orange>Sourcing Book</Badge>'
        }
    })
    .add('Error ', () => {
        return {
            components: { Badge },

            template: '<Badge>Order recieved</Badge>'
        }
    })