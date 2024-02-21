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

  test('Should add todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        todo: 'Testing todo 2',
        done: false
      }
    }

    const newState = todoReducer( initialState, action );

    expect( newState.length ).toBe( 2 );
    expect( newState ).toContain( action.payload );

  });   
  
});