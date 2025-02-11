import React, {useContext} from 'react'
import Login from './Login.jsx'
import userContext from '../context/UserContext.js'

function Profile(){
const {user} = useContext(Context)
const {password} = useContext(Context)

if (!user) return <div>
Login First
</div>
return <div>
  Welcome {user}!!! Password: {password}
</div>
}

export default Profile