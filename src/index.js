import Vue from 'vue'
import HeadingOne from './components/HeadingOne.vue'


const Components = {
    HeadingOne
}
Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components