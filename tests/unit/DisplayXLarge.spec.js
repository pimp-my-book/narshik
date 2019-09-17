import { render, fireEvent, cleanup } from '@testing-library/vue'
import DisplayXLarge from '../../src/components/DisplayXLarge.vue'

afterEach(cleanup)

test('Renders the text prop', () => {

    const text = 'Stab me'
    const { getByText } = render(DisplayXLarge, {
        props: { text: text }
    }
    )

    getByText(text)



})