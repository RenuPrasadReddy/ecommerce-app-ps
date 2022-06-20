import { render, screen, act, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import {  rest } from 'msw'
import {  setupServer } from 'msw/node'

import App from '../App';
import data from './mockResponseData.json';


const worker = setupServer(
    rest.get('*', (req, res, ctx) => {
        return res(
            // ctx.delay(1500),
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

describe("products ", () => {
    jest.setTimeout(30000);

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    test('click pagination numbers', async () => {
        const { container } = render(<App />);
        let pagination = null
        await waitFor(async () => {

            pagination = await screen.findAllByLabelText("Go to page number 2")
            // console.log("pag=", pagination[0]);
            expect(pagination.length).toBe(1)
            fireEvent.click(pagination[0]);
            screen.debug();
            
            const items = await screen.findAllByRole('button')
            expect(items).toHaveLength(102);
        }, { timeout: 5000 })
    });

    test('add to cart', async () => {
        const mock = jest.fn();
        const handleAddToCart = mock("foo");

        const { container } = render(<App />);
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
        
        expect(mock).toHaveBeenCalledTimes(1);
        act(()=> {
            fireEvent.click(items[2]);
        })
    });
    

});
