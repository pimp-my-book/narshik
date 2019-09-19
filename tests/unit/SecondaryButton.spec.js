import { render, fireEvent, cleanup } from '@testing-library/vue'
import SecondaryButton from '../../src/components/buttons/SecondaryButton'

afterEach(cleanup)

describe('<SecondaryButton/>', () => {
    test('It accepts button text prop', () => {
        const text = 'Thanks I have received it'
        const { getByText } = render(SecondaryButton, {
            props: { text: text }
        })

        expect(getByText(text))
    })

    test('Shows loading state', () => {
        const { getByLabelText } = render(SecondaryButton, {
            props: { isLoading: true }
        })

        expect(getByLabelText('loading-spinner'))
    })
})