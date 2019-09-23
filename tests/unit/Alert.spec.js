import { render, fireEvent, cleanup } from '@testing-library/vue'
import Alert from '../../src/components/modals/Alert.vue'

afterEach(cleanup)

describe('<Alert/>', () => {
    test('Renders the alert message', () => {
        const message = 'Can you help me?'
        const { queryByText } = render(Alert, {
            props: { message: message }
        })
        expect(queryByText(message))
    })

    test('Can close the alert', () => {
        const toggle = jest.fn()
        const message = 'Help me understand'
        const { getByLabelText, getByText, emitted } = render(Alert, {
            on: { toggle: toggle },
            props: {
                message: message
            }
        })

        fireEvent.click(getByLabelText('close button'))
        expect(emitted()).toHaveProperty('click')
    })
})