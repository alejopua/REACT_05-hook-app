import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext)
  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre
        aria-label="preTag"
      >
        {JSON.stringify(user, null, 3)}
      </pre>

      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 123, name: 'Pepito', email: 'venitocamelas@mail.cot'})}
        aria-label="btnSetUser"
      >
        Establecer Usuario
      </button>
    </>
  )
}