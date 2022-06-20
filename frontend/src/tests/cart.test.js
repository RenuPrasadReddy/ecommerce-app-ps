import { render, screen, act, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

import App from '../App';

describe.skip("check cart", () => {
    jest.setTimeout(30000);

    test('to check cart item', async () => {
        render(<App />);
        const history = createMemoryHistory()
        history.push('/home')

        let pagination = null;
        let items = 0;
        await waitFor(async () => {

            pagination = await screen.findAllByLabelText("Go to page number 2")
            expect(pagination.length).toBe(1)

            
            items = await screen.findAllByRole('button', {name: /add to cart/i});
            console.log("------", items[0]);

           
           
        }, { timeout: 9000 })

        act(()=> {
            fireEvent.click(items[0]);
        })


        let cartElement = null
        act(() => {
            cartElement = screen.getByTestId("cart");
        });
        console.log("======", cartElement);

        act(() => {
            fireEvent.click(cartElement);
        })
        await act(() => expect(screen.getByText(/You are one click away from ordering.../i)).toBeInTheDocument())

    });

    test.skip('to check title when cart is empty', async () => {
        const {container, unmount}= render(<App />);

        let cartElement = null
        act(() => {
            cartElement = screen.getByText(/cart/i);
        });
        console.log("======", cartElement);

        act(() => {
            fireEvent.click(cartElement);
        })
        await act(() => expect(screen.getByText(/No items in cart/i)).toBeInTheDocument())
        unmount()
    });

    

})