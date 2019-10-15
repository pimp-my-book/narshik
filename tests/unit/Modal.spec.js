import { render, fireEvent, cleanup } from '@testing-library/vue'
import Modal from '../../src/components/modals/Modal.vue'

afterEach(cleanup)

describe('<Modal/>', () => {
    test('It renders stuff in the slot', () => {

        const headerSlot = `<h1>helo header</h1>`
        const bodySlot = `<p>Formula One is...</p>`
        const footerSlot = `<p>you know what...</p>`

        const { queryByText } = render(Modal, {
            slots: {
                header: headerSlot,
                body: bodySlot,
                footer: footerSlot
            }
        })

        expect(queryByText(headerSlot))
        expect(queryByText(bodySlot))
        expect(queryByText(footerSlot))

    })

    test('It closes the modal', () => {

    })
})