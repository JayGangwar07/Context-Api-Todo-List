import React, {useState, useContext} from 'react'
import userContext from '../context/UserContext.js'

function Login(){

const [username, setUsername] = useState('')
const [password, set_Password] = useState('')
const {setUser} = useContext(userContext)
const {setPassword} = useContext(userContext)

function submit(){
setUser(username)
setPassword(password)
}

return(
<>
<input
type='text'
placeholder='Username'
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>
<input
type='text'
placeholder='Password'
value={password}
onChange={(e)=>set_Password(e.target.value)}
/><br />
<button onClick={submit}>Submit</button>
</>
)
}

export default Login