
import PropTypes from 'prop-types'

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
   return (
      <li className="list-group-item d-flex justify-content-between">
         <span 
            className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
            onClick={ () => onToggleTodo( todo.id )}
         >
            {todo.desc}
         </span>

         <button 
            className="btn btn-danger"
            onClick={ () => onDeleteTodo( todo.id ) }
         >
            borrar
         </button>
      </li>
   )
}

TodoItem.propTypes = {
   todo: PropTypes.object,
   onDeleteTodo: PropTypes.func,
   onToggleTodo: PropTypes.func
}


