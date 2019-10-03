import Vue from 'vue'
require('./assets/tailwind.css')
import DisplayXLarge from './components/typography/DisplayXLarge.vue'
import DisplayLarge from './components/typography/DisplayLarge.vue'
import DisplaySmall from './components/typography/DisplaySmall.vue'
import FeatureText from './components/typography/FeatureText.vue'
import Input from './components/inputs/Input.vue'
import Textarea from './components/inputs/Textarea.vue'
import PrimaryButton from './components/buttons/PrimaryButton.vue'
import SecondaryButton from './components/buttons/SecondaryButton.vue'
import LinkButton from './components/buttons/LinkButton.vue'
import SmallCard from './components/cards/SmallCard.vue'
import Alert from './components/modals/Alert.vue'
import Badge from './components/badges/Badge.vue'
import Tab from './components/navigation/Tab.vue'

const Components = {
    DisplayXLarge,
    DisplayLarge,
    DisplaySmall,
    FeatureText,
    Input,
    Textarea,
    SecondaryButton,
    PrimaryButton,
    LinkButton,
    SmallCard,
    Alert,
    Badge,
    Tab
}
Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components