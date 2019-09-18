import { render, fireEvent, cleanup } from '@testing-library/vue'
import PrimaryButton from '../../src/components/buttons/PrimaryButton'


afterEach(cleanup)

describe('<PrimaryButton/>', () => {
    test('It accepts button text prop', () => {

        const text = 'Take ya head off'
        const { getByText, getByDisplayValue, findByText } = render(PrimaryButton, {
            props: { text: text }
        })

        expect(getByText(text))
    })

    test.skip('It forwards the supplied url', () => {

        const url = '/stripped'
        const text = 'Lets go'
        const { getByLabelText } = render(PrimaryButton, {
            props: { text: text, url: url }
        })

        expect(getByLabelText(url))
    })

    test('Shows loading state', () => {

        const { getByLabelText } = render(PrimaryButton, {
            props: { isLoading: true }
        })

        expect(getByLabelText('loading-spinner'))
    })
})