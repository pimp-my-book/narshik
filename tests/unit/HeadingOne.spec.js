import { render, fireEvent, cleanup } from '@testing-library/vue'
import HeadingOne from '../../src/components/HeadingOne.vue'

afterEach(cleanup)

test('Renders the text prop', () => {

    const text = 'Stab me'
    const { getByText } = render(HeadingOne, {
        props: { text: text }
    }
    )

    getByText(text)



})