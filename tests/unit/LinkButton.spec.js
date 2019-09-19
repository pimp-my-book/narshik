import { render, fireEvent, cleanup } from '@testing-library/vue'
import LinkButton from '../../src/components/buttons/LinkButton'

afterEach(cleanup)

describe('<LinkButton/>', () => {
    test('It accepts text as prop', () => {
        const textColor = 'text-pink'
        const text = " Give me a pdf"
        const href = "/email"
        const { queryByText } = render(LinkButton, {
            props: { text: text, textColor: textColor, href: href }
        })
        expect(queryByText(text))

    })
})