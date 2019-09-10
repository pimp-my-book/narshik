import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import NavigationBar from './NavigationBar.vue'
import { template } from 'handlebars'



storiesOf('Navbar', module)
    .add('A nav bar', () => {
        return {

            components: { NavigationBar },
            template: `<NavigationBar/>`
        }
    })