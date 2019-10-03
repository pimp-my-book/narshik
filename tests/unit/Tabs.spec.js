import { render, fireEvent, cleanup, getByText } from '@testing-library/vue'
import Tab from '../../src/components/navigation/Tabs'

afterEach(cleanup)
describe('<Tab/>', () => {
    test('It renders the content in the tab', () => {

        const headingOne = "Art"
        const headingTwo = "Music"

        const { getTextBy } = render(Tab, {
            props: {
                tabHeadingOne: headingOne,
                tabHeadingTwo: headingTwo
            },
            slots: {
                tabOne: 'I am designed this way'
            }
        })

        expect(getByText('I am designed this way'))
    })


    test('You are able to select another tab', () => {

    })
})