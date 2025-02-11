import React, {useState} from 'react'
import userContext from './UserContext.js'

function UserProvider({children}){

const [user, setUser] = useState(null)
const [password, setPassword] = useState(null)

return(
<userContext.Provider
  value={{user, setUser, password, setPassword}}>
  {children}
</userContext.Provider>
)
}

export default UserProvider