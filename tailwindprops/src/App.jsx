import { useState } from 'react'
import Card from './components/Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='rounded-xl bg-red-400 px-2 py-3'>Tailwind Test</h1>
      <Card username="Bishal" btnText="Click Me" content="Hi I am Bisal Shrestha. Currently hired as an intern by UBA Solution."/>
      <Card username="Ashol" />
    </>
  )
}

export default App
