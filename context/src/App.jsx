import { useState } from 'react'
import './App.css'
import UserProvider from './context/UserProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {

return (
<UserProvider>
  <Login />
  <Profile />
</UserProvider>
)
}

export default App