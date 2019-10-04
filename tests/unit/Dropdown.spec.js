import { render, fireEvent, cleanup } from '@testing-library/vue'
import Dropdown from '../../src/components/inputs/Dropdown.vue'

afterEach(cleanup)

describe('<Dropdown/>', () => {
    test('It renders options in the dropdown list', () => {
        const slotContent = `<option>Choose..</option>
<option>Cage The Elephant</option>
<option>Interpol</option>`

        const { queryByText } = render(Dropdown, {
            slots: {
                dropdownContent: slotContent
            }
        })

        expect(queryByText('Cage The Elephant'))
    })

    test('It allows you to select an item in the options', () => {
        const slotContent = `<option>Choose..</option>
        <option>Cage The Elephant</option>
        <option>Interpol</option>`

        const { getByLabelText, getByDisplayValue } = render(Dropdown, {]
            slots: {
                dropdownContent: slotContent
            }
        })

        fireEvent.select(getByLabelText('dropdown'), { target: { value: 'Interpol' } })
        expect(getByDisplayValue('Interpol'))
    })
})