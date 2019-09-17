import { render, fireEvent, cleanup } from '@testing-library/vue'
import FeatureText from '../../src/components/typography/FeatureText.vue'

afterEach(cleanup)

test('Renders the text prop', () => {

    const text = 'Love would`nt lie like you'

    const { getByText } = render(FeatureText, {
        props: { text: text }
    }
    )

    getByText(text)



})