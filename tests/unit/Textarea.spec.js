import { render, fireEvent, cleanup } from '@testing-library/vue'
import Textarea from '../../src/components/inputs/Textarea.vue'

afterEach(cleanup)

describe('<Textarea/>', () => {
    test('Accepts text input', () => {
        const { getByDisplayValue, getByLabelText } = render(Textarea)

        fireEvent.input(getByLabelText('textarea field'), { target: { value: 'I am outside' } })
        expect(getByDisplayValue('I am outside'))
    })
})