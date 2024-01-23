import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
   const { allTodos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todos, pendingTodos } = useTodo();

   return (
      <>
         <h1 className="d-flex justify-content-center">Todo App</h1>
         <h4 className="d-flex justify-content-center">{`Completed: ${ allTodos } - Pending: ${ pendingTodos }`}</h4>
         <hr />

         <div className="row">
               <div className="col-7">
                  <TodoList 
                     todos={todos} 
                     onDeleteTodo={handleDeleteTodo} 
                     onToggleTodo={handleToggleTodo} 
                  />
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
