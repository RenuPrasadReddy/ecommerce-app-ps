import { render, screen, act, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {  rest } from 'msw'
import {  setupServer } from 'msw/node';

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

describe("to check featuredproducts components", () => {
    jest.setTimeout(30000);

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    test('h3 compoent, title', async () => {
        const { container } = render(<App />);

        await waitFor(async () => {
            pagination = await screen.findAllByLabelText("Go to page number 2")
            expect(pagination.length).toBe(1);
            
            items = await screen.findAllByRole('button', {name: /add to cart/i});
           
        }, { timeout: 9000 })

        const title = await screen.findByText("Featured products of different category")
        expect(title).toBeInTheDocument()
    });

})