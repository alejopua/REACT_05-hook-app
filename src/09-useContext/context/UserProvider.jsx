import { useState } from "react"
import { UserContext } from "./UserContext"

const user = {
  id: 1,
  name: 'Tania',
  email: 'tani@gogli.com'
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{ user , setUser }}>
      { children }
    </UserContext.Provider>
  )
}


