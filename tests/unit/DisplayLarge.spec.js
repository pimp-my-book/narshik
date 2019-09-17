import { render, fireEvent, cleanup } from '@testing-library/vue'
import DisplayLarge from '../../src/components/typography/DisplayLarge.vue'

afterEach(cleanup)

test('Renders the text prop', () => {

    const text = 'Lebron James'
    const { getByText } = render(DisplayLarge, {
        props: { text: text }
    }
    )

    getByText(text)



})