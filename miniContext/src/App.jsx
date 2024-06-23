import { useState } from 'react'
import UserContextProvider from './context/UseContextProvider'
import Login from './comoponents/Login'
import Profile from './comoponents/Profile'
import "./App.css"

function App() {

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
