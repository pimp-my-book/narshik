import { render, fireEvent, cleanup } from '@testing-library/vue'
import Input from '../../src/components/inputs/Input.vue'

afterEach(cleanup)

describe('<Input/>', () => {
    test('Accepts text prop', () => {

        const { getByText, getByLabelText, getByDisplayValue } = render(
            Input
        )

        fireEvent.input(getByLabelText('input field'), { target: { value: 'Bonobo' } })
        expect(getByDisplayValue('Bonobo'))
    })
})
