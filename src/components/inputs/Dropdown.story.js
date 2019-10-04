import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Dropdown from './Dropdown.vue'

storiesOf('Dropdown', module)
    .add('Basic Example', () => {
        return {
            components: { Dropdown },
            template: `<Dropdown>
            <option>Choose..</option>
                        <option>Cage The Elephant</option>
                        <option>Interpol</option>
                        </Dropdown>`
        }
    })