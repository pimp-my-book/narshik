import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Dropdown from './Dropdown.vue'

storiesOf('Dropdown', module)
    .add('Basic Example', () => {
        return {
            components: { Dropdown },
            template: `<Dropdown>
            <template v-slot:dropdown-content>
            <option>Choose..</option>
            <option>Cage The Elephant</option>
            <option>Interpol</option>
            </template>
                        </Dropdown>`
        }
    })