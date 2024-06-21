import {  useState, useCallback , useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed){ str += "0123456789"}
    if(charAllowed) { str += "!@#$%^&*()_+{}[]`~"}
    
    for ( let i = 1; i <= length; i++ ){
      let char = Math.floor( Math.random() * str.length + 1 )
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,15);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, setPassword])

  return (
   <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-4 px-4 my-8 text-red-600 bg-gray-400">
        <h1 className="text-center text-white text-4xl mb-4">Password Generator</h1>
        <div className="flex shadow overflow-hidden rounded-lg mb-4">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password" 
        ref={passwordRef}
        readonly
        />
        <button 
        className="bg-blue-600 outline-none px-4 text-white text-2px font-bold"
        onClick={copyPasswordToClipboard}
        >Copy</button>
       
        </div>
        <div className="flex text-sm gap-x-2 font-semibold">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-poiter"
            onChange={ (e) => (setLength(e.target.value)) }
            />
            <label htmlFor="">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={ () => { setNumberAllowed((prev) => !prev) } }
            />
            <label htmlFor="">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={ () => { setCharAllowed((prev) => !prev) } }
            />
            <label htmlFor="">Characters</label>
          </div>

        </div>
      </div>
   </>
  )
}

export default App
