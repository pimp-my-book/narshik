import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import FeatureText from './FeatureText.vue'

storiesOf('Feature text', module)
    .add('Small ', () => {
        return {
            components: { FeatureText },
            template: '<FeatureText small text="mickale"/>'
        }
    })
    .add(' large', () => {
        return {
            components: { FeatureText },
            template: '<FeatureText text="mickale"/>'
        }
    })