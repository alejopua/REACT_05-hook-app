import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Testing in todoReducer.js', () => {

  const initialState = [{
    id: 1,
    todo: 'Testing todo',
    done: false
  }]

  test('Should return the initial State', () => {
    const newState = todoReducer( initialState, {} );

    expect( newState ).toBe( initialState );


    
  });
  
});