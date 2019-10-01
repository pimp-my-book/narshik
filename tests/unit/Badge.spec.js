import { render, fireEvent, cleanup } from '@testing-library/vue'
import Badge from '../../src/components/badges/Badge.vue'

afterEach(cleanup)

describe('<Badge/>', () => {
    test('It renders the text message', () => {
        const { getByText } = render(Badge, {
            slots: {
                message: 'text me'
            }
        })

        expect(getByText('text me'))
    })

    test('It renders the green colour', () => {
        const { findAllByLabelText } = render(Badge, {
            props: { success: true }
        })

        expect(findAllByLabelText('bg-green'))
    })

    test('It renders the orange colour', () => {
        const { findAllByLabelText } = render(Badge, {
            props: { orange: true }
        })

        expect(findAllByLabelText('bg-orange'))
    })

    test('It renders the red colour', () => {
        const { findAllByLabelText } = render(Badge)

        expect(findAllByLabelText('bg-red'))
    })

})