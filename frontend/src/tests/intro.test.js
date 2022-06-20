import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

describe("to check Inro components", () => {
    
    // beforeEach(() => {
    //     render(<App />);
    // })
    // afterEach(() => {
    // })

    test('h2 component', async () => {
        render(<App />);
        let linkElement = null

        await waitFor(() => expect(screen.getByTestId("jewel-h2")).toBeInTheDocument())
    });

    test('check sub-title', async () => {
        render(<App />);
        let linkElement = null
        // act(() => {
        //     linkElement = screen.getByTestId("jewel-h2");
        // });
        // expect(linkElement).toBeInTheDocument();

        await waitFor( () => expect(screen.getByText((content, element) => {
            return content !== '' && element.textContent === 'Buy the best jewellery at lowest price';
          })
        ).toBeInTheDocument());

    });

})