import { render, fireEvent, cleanup, getByText, getByLabelText } from '@testing-library/vue'
import Tab from '../../src/components/navigation/Tab'

afterEach(cleanup)
describe('<Tab/>', () => {
    test('It renders the content in the tab', () => {

        const headingOne = "Art"
        const headingTwo = "Music"

        const { queryAllByText } = render(Tab, {
            props: {
                tabHeadingOne: headingOne,
                tabHeadingTwo: headingTwo
            },
            slots: {
                tabOne: 'I am designed this way'
            }
        })

        expect(queryAllByText('I am designed this way'))
    })


    test('You are able to select another tab', () => {
        const headingOne = "Art"
        const headingTwo = "Music"

        const { getTextBy, queryAllByLabelText } = render(Tab, {
            props: {
                tabHeadingOne: headingOne,
                tabHeadingTwo: headingTwo,
                numOfTabs: 2
            },
            slots: {
                tabOne: 'I am designed this way',
                tabTwo: 'Fame wont get you high like this'
            }
        })
    })

    fireEvent.click(queryAllByLabelText('tab item1'))
    expect(getByText('Fame wont get you high like this'))

})