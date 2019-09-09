import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import NavigationBar from './NavigationBar.vue'

storiesOf('Navbar', module)
    .add('A nav bar', () => '<NavigationBar/>')