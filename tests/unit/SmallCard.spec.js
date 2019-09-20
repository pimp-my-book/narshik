import { render, fireEvent, cleanup } from '@testing-library/vue'
import SmallCard from '../../src/components/cards/SmallCard'

afterEach(cleanup)

describe('<SmallCard>', () => {
    test('It accepts the textprops', () => {

        const cardTitle = 'Million Dollars'
        const cardText = 'Trying to stop the judge'

        const { getByText } = render(SmallCard, {
            props: { cardText: cardText, cardTitle: cardTitle }
        })

        expect(getByText(cardTitle))
        expect(getByText(cardText))
    })
})