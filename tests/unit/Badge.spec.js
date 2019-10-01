import { render, fireEvent, cleanup } from '@testing-library/vue'
import Badge from '../../src/components/badges/Badge.vue'

afterEach(cleanup)

describe('<Badge/>', () => {
    test('It renders the text message', () => {
        const { getByText } = render(Badge, {
            slots: {
                'text me'
    }
        })
    })

    test('It renders the correct colour', {

    })
})