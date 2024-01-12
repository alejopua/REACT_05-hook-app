import { useEffect } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onReset: onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });
  
  // const { username, email, password } = formState;

  useEffect(() => {
    // console.log('called useEffect')
  }, [])

  useEffect(() => {
    // console.log('formState changed')
  }, [formState])

  useEffect(() => {
    // console.log('email changed')
  }, [email])
  

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={onInputChange}
      />
      <input 
        type="email"
        className="form-control mt-2"
        placeholder="pepito@gmail.com"
        name="email"
        value={ email }
        onChange={onInputChange}
      />

      <input 
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={ password }
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2 ms-0">Reset</button>

    </>
  )
}
