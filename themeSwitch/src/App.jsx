import { useState, useEffect } from 'react'
import './App.css'
import {ThemeProvider} from './context/ThemeContext.js'
import Card from './components/Card.jsx'
import ThemeBtn from './components/ThemeBtn.jsx'

function App() {

const [themeMode, setThemeMode] = useState("light")

const lightMode = () => {
setThemeMode("light")
}

const darkMode = () => {
setThemeMode("dark")
}

//changing theme

useEffect(() => {
let tag = document.querySelector('html')
tag.classList.remove("light", "dark")
tag.classList.add(themeMode)
}, [themeMode])

return (
<ThemeProvider value={{themeMode, darkMode, lightMode}}>
  <ThemeBtn />
  <Card />
</ThemeProvider>
)
}

export default App