import Vue from 'vue'
import { Components } from './components'

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components