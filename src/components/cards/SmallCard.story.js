import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import SmallCard from './SmallCard.vue'

storiesOf('Link Button', module)
    .add('Basic Example', () => {
        return {
            components: { SmallCard },
            template: '<SmallCard cardTitle="text-black" cardText="Do not cross us"/>'
        }
    })