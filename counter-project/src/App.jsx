
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter >= 20){
      alert("Value cannot be grater than 20")
    }else{
      setCounter(counter + 1)
    }
    
  }

  const subValue = () => {
    if(counter == 0){
      alert("value cannot be less than 0")
    }else{
      setCounter(counter - 1)
    }
    
  }
  

  return (
    <>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subValue}>Decrease Value</button>
    </>
  )
}

export default App
