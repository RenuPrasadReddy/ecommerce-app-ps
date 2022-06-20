import { render, screen, act, waitFor, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

describe("to check if all elements present in navbar",  () => {

  test('shop name', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText(/easy buy/i)).toBeInTheDocument())

  });

  test('nav link element, Home', async () => {
    render(<App />);
    let linkElement = null
    act(() => {
      linkElement = screen.getByText(/Home/i);
    });
    expect(linkElement).toBeInTheDocument();
  });

  test('nav link element, cart', async () => {
    render(<App />);
    let linkElement = null
    act(() => {
      linkElement = screen.getByText(/cart/i);
    });
    console.log("======", linkElement);
    expect(linkElement).toBeInTheDocument();
  });

  test('nav link element, contact', async () => {
    render(<App />);
    let linkElement = null
    act(() => {
      linkElement = screen.getByText(/contact/i);
    });
    expect(linkElement).toBeInTheDocument();
  });
  
  test('nav link element, login', async () => {
    render(<App />);
    let linkElement = null
    act(() => {
      linkElement = screen.getByText(/Login/i);
    });
    expect(linkElement).toBeInTheDocument();
  });

  test('check hamburger', async () => {
    const {container, unmount}= render(<App />);
    let linkElement = null
    // act(() => {
    //   linkElement = screen.getByText(/Login/i);
    // });
    // expect(linkElement).toBeInTheDocument();

    // const bars = container.getElementsByClassName('bar');
    // console.log(bars.length); 
    // expect(bars.length).toBe(3);

    await waitFor(() => {
      expect(container.getElementsByClassName('bar').length).toBe(3)
    });
    unmount();
  });

  test('click hamburger', async () => {
    const {container, unmount}= render(<App />);

    const mock = jest.fn();
    const handleHamburger = mock();
    let hamburger = null;
    await waitFor(() => {
      hamburger = container.getElementsByClassName('hamburger');
      console.log("hamburger=",hamburger.length);
    })
    act(() => {
      fireEvent.click(hamburger[0]);
    })
    expect(mock).toHaveBeenCalledTimes(1);
    unmount();
  });
})