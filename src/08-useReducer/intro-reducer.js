
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const todoAddAction = {
    type: '[TODO]: add todo',
    payload: newTodo
}

const todoReducer = ( state = initialState, action = {} ) => {
  if (action?.type === '[TODO]: add todo') {
    return [...state, action.payload];
  }

  return state;
}

console.log(todoReducer()); // [{…}]
console.log(todoReducer(initialState, todoAddAction)); // [{…}, {…}]