import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Testing in useCounter', () => {

  test('should return default values ', () => {
    const { result } = renderHook( () => useCounter() );
    const { counter, decrement, increment, reset } = result.current;

    expect( counter ).toBe( 1 );
    expect( decrement ).toEqual( expect.any( Function ) );
    expect( increment ).toEqual( expect.any( Function ) );
    expect( reset ).toEqual( expect.any( Function ) );
  });

  test('the counter should return 100', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { counter } = result.current;
    expect( counter ).toBe( 100 );
  });

  test('should increment the counter', () => {
    const { result } = renderHook( () => useCounter() );
    const { increment } = result.current;

    act( () => {
      increment();
      increment(3);
    });

    expect( result.current.counter ).toBe( 5 );
  });

  test('should decrement the counter', () => {
    const { result } = renderHook( () => useCounter() );
    const { decrement } = result.current;

    act( () => {
      decrement();
      decrement(6);
    });

    expect( result.current.counter ).toBe( -6 );
  });

  test('should reset the counter', () => {
    const { result } = renderHook( () => useCounter(0) );
    const { decrement, reset } = result.current;

    act( () => {
      decrement();
      decrement(6);
      reset();
    });

    expect( result.current.counter ).toBe( 0 );
  });
  
});