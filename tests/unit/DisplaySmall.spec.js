import { render, fireEvent, cleanup } from '@testing-library/vue'
import DisplaySmall from '../../src/components/typography/DisplaySmall.vue'

afterEach(cleanup)

test('Renders the text prop', () => {

    const text = 'Can I get a glimpse'

    const { getByText } = render(DisplaySmall, {
        props: { text: text }
    }
    )

    getByText(text)



})