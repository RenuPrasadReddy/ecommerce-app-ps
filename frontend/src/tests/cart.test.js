import { render, screen, act, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history'

import App from '../App';

import {  rest } from 'msw'
import {  setupServer } from 'msw/node';
import data from './mockResponseData.json';

const worker = setupServer(
    rest.get('*', (req, res, ctx) => {
        return res(
            ctx.delay(1500),
            ctx.status(202, 'Mocked status'),
            ctx.json({
                data: data,
            }),
        )
    }),
)

const server = setupServer(
    rest.get('/products', (req, res, ctx) => {
        return res(ctx.json({ token: 'mocked_user_token' }))
    }),
)


describe("check cart", () => {
    jest.setTimeout(30000);

    test('to check cart item', async () => {
        render(<App />);
        // const history = createMemoryHistory()
        // history.push('/home')

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
        console.log("cartEl=====", cartElement);

        act(() => {
            fireEvent.click(cartElement);
        })
        await act(() => expect(screen.getByText(/You are one click away from ordering.../i)).toBeInTheDocument())

    });

    test('to check no cart items string', async () => {
        const {container, unmount}= render(<App />);
        await new Promise((r) => setTimeout(r, 5000));

        let cartElement = null;
        act(() => {
            cartElement = screen.getByTestId("cart");
        });
        console.log("======", cartElement);

        act(() => {
            fireEvent.click(cartElement);
        })
        screen.debug()
        await waitFor(() => expect(screen.getByText(/No items in cart/i)).toBeInTheDocument(), {timeout: 12000})
        // unmount()
    });

    test('to check total price', async () => {
        const {container, unmount}= render(<App />);

        let cartElement = null
        act(() => {
            cartElement = screen.getByText(/cart/i);
        });
        console.log("======", cartElement);

        act(() => {
            fireEvent.click(cartElement);
        })
        await act(() => expect(screen.getByText(/total/i)).toBeInTheDocument())
        unmount()
    });

    

})