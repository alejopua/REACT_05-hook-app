import { useForm } from "../hooks/useForm"

export const AddTodo = ({onNewTodo}) => {
   const { description, onInputChange, onResetForm } = useForm({
      description: ''
   });

   const onFormSubmit = (e) => {
      e.preventDefault();
      if (description.trim().length <= 1) return;

      const newTodo = {
         id: crypto.randomUUID(),
         desc: description,
         done: false
      }

      onNewTodo && onNewTodo(newTodo);
      onResetForm();
   }

   return (
      <>
         <form 
            onSubmit={onFormSubmit}
            className="form-group"
         >
            <input 
               className="form-control"
               type="text" 
               placeholder="¿Que hay que hacer?"
               name="description"
               value={description}
               onChange={onInputChange}
            />

            <button
               type="submit"
               className="btn btn-primary ml-1 mt-1"
            >
               Agregar
            </button>
         </form>
      </>
   )
}
