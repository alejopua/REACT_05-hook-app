import { UserContext } from "./UserContext"

const user = {
  id: 1,
  name: 'Tania',
  email: 'tani@gogli.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hello: 'world', user: user }}>
      { children }
    </UserContext.Provider>
  )
}


