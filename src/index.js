import Vue from 'vue'
import NavigationBar from './Navigation/NavigationBar'
import SideNavBar from './Navigation/SideNavBar'

const Components = {
    NavigationBar,
    SideNavBar

}


Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components
