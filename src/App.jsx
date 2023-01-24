import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(10)

  const handleClick = () => {
    setCounter(counter + 1)
  }
  const handleClick2 = () => {
    setCounter2(counter2 + 1)
  }
  
  useEffect(()=>{
    console.log("Petición a API 1")
  }, [counter, counter2])

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleClick}>+ 1</button>
      <hr />
      <h2>{counter2}</h2>
      <button onClick={handleClick2}>+ 1</button>
    </div>
  )
}

export default App
