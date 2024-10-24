import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)


  const addValue = () => {
    setCount(counter + 1)
  }

  const removeValue = () => {
    if (counter > 0) {
      setCount(counter - 1)
    }
  }
  return (
    <>
      <h1> Counter Project </h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue} >Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
