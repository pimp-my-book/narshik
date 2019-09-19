import { render, fireEvent, cleanup } from '@testing-library/vue'
import LinkButton from '../../src/components/buttons/LinkButton'

afterEach(cleanup)

describe('<LinkButton/>', () => {
    test('It accepts text + url as prop', () => {
        const textColor = 'text-pink'
        const text = " Give me a pdf"
        const href = "/email"
        const { getByText } = render(LinkButton, {
            props: { text: text, textColor: textColor, href: href }
        })
        expect(getByText(text))
        expect(getByText(textColor))
        expect(getByText(href))
    })
})