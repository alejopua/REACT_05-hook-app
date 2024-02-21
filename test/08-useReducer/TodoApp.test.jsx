import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo')

useTodo.mockReturnValue({
  allTodos: 1,
  handleDeleteTodo: jest.fn(),
  handleNewTodo: jest.fn(),
  handleToggleTodo: jest.fn(),
  pendingTodos: 1,
  todos: [
    {
      id: 1,
      desc: 'Todo # 1',
      done: true
    },
    {
      id: 2,
      desc: 'Todo # 2',
      done: false
    }
  ]
})


describe('Testing in <TodoApp/>', () => {
  test('Should show the component correctly', () => {
    render( <TodoApp /> );
    
    expect( screen.getByText('Todo # 1')).toBeTruthy();
    expect( screen.getByText('Todo # 2')).toBeTruthy();
  });
});