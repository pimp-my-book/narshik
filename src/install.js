import * as components from './components'

const install = (Vue, options = {}) => {
    for (let key in components) {
        let _key = options.prefix ? options.prefix + key : key
        Vue.component(_key, components[key])
    }
}

if (typeof window !== 'undefined' && window.vue) {
    install(window.vue)
}

export { install }