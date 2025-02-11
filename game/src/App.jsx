import { useState } from 'react'
import useLogic from './hooks/useLogic.jsx'
import './App.css'

function App() {

const {board, point, click, x} = useLogic()

return (
<div className="w-screen h-screen bg-gray-800">
  <h1 className="text-white text-6xl text-center py-22">Tic Tac Toe</h1>
  <div className="grid grid-cols-3 gap-2">
  {board.map((b, index) => {
  return <button
    onClick={()=>click(index)}
    className="bg-gray-600 h-20 active:bg-red-700 active:text-red-700 text-7xl font-sans text-white" key={index}
    disabled={b !== null}
    >{b}</button>
  })}
</div>
</div>
)
}

export default App