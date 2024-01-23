import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";

const initialState = [

];

const init = () => {
   return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {
   const [todos, dispatch] = useReducer( todoReducer, initialState, init );

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));

   }, [todos])
   

   const handleNewTodo = (newTodo) => {
      const action = {
         type: '[TODO] Add Todo',
         payload: newTodo
      }

      dispatch(action);
   }

   return (
      <>
         <h1>Todo App: 10, <small>Pedientes: 2</small></h1>
         <hr />

         <div className="row">
               <div className="col-7">
                  <TodoList todos={todos} dispatch={dispatch} />
               </div>

               <div className="col-5">
                  <h4>Add Todo</h4>
                  <hr />
                  <AddTodo onNewTodo={handleNewTodo} />
               </div>

         </div>
      </>
   )
}
