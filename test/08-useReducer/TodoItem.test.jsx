import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Testing in <TodoItem />', () => {
  const todo = {
    id: 1,
    desc: 'Aprender React',
    done: false
  }

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  beforeEach( () => jest.clearAllMocks() )

  test('should show the completed todo', () => {
    
    render(
      <TodoItem 
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const spanElement = screen.getByLabelText('span')
    expect( spanElement.className ).toBe('align-self-center ')

  });

  test('should show the pending todo', () => {
    todo.done = true

    render(
      <TodoItem 
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
      )

      const spanElement = screen.getByLabelText('span')
      expect( spanElement.className ).toContain('text-decoration-line-through')
  });

  test('"span" should call the toggleTodo when clicked', () => {

    render(
      <TodoItem 
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
      )

      const spanElement = screen.getByLabelText('span')
      fireEvent.click( spanElement )
      expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )
  });

  test('"span" should call the DeleteTodo when clicked', () => {

    render(
      <TodoItem 
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
      )

      const deleteButton = screen.getByLabelText('button-delete')
      fireEvent.click( deleteButton )
      expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )
  });

});