import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import SmallCard from './SmallCard.vue'

storiesOf('Small Card', module)
    .add('Basic Example', () => {
        return {
            components: { SmallCard },
            template: '<div class="w-64"><SmallCard cardTitle="text-black" cardText="Do not cross us"/></div>'
        }
    })