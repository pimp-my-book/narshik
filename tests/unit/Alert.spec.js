import { render, fireEvent, cleanup } from '@testing-library/vue'
import Alert from '../../src/components/modals/Alert.vue'

afterEach(cleanup)

describe('<Alert/>', () => {
    test('Renders the alert message', () => {
        const message = 'Can you help me?'
        const { queryByText } = render(Alert)
        expect(queryByText(message))
    })

    test('Can close the alert', () => {

    })
})