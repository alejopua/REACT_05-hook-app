import { render, screen, fireEvent, renderHook, act } from"@testing-library/react";
import { MultiplesCustomHooks } from"../../src/03-examples";
import { useFetch } from"../../src/hooks/useFetch";
import { useCounter } from"../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch'); // mock the useFetch function
jest.mock('../../src/hooks/useCounter'); // mock the useCounter function


describe('Testing in <MultiplesCustomHooks/>', () => {

  const mockIncrement = jest.fn();
  
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  beforeEach(() => {
    jest.clearAllMocks();
  })
  
  test('should display the default component', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })

    render( <MultiplesCustomHooks /> );
    expect( screen.getByText('Loading...'))
    expect( screen.getByText('Breaking Bad Quotes'))

    const nextButton = screen.getByRole('button', { name: 'Next quote'});
    expect(nextButton.disabled).toBeTruthy();
    // screen.debug();
  });

  test('should show Quote', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'Peter', quote: 'Hi, my name is Peter' }],
      isLoading: false,
      hasError: null
    })

    render( <MultiplesCustomHooks /> );
    expect( screen.getByText('Hi, my name is Peter')).toBeTruthy()
    expect( screen.getByText('Peter')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'Next quote'})
    expect(nextButton.disabled).toBeFalsy()
    // screen.debug();
  });

  test('should call the increment function', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'Peter', quote: 'Hi, my name is Peter' }],
      isLoading: false,
      hasError: null
    })

    render( <MultiplesCustomHooks /> );
    const nextButton = screen.getByRole('button', { name: 'Next quote'})
    fireEvent.click(nextButton);

    expect( mockIncrement ).toHaveBeenCalled();
    // screen.debug();
  });
});