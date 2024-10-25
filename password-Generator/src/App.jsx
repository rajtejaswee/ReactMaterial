import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numbersAllowed, setnumbersAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "1234567890";
    if (characterAllowed) str += ",.<>?!@#$%^&*()_+-={}[]:`~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    
    }
    setPassword(pass)
  }, [length, numbersAllowed, characterAllowed, setPassword])

  const copytotheClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText
  }, [password] )
  
  useEffect(() => {
    passwordGenerator()
  },[length, numbersAllowed,characterAllowed,passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-400 text-orange-300">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        >
        </input>
        <button
          onClick={copytotheClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
        copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={7}
            max={15}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            id="numberInput"
            onChange={() => {
              setnumbersAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput"> Numbers </label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="numberInput"
            onChange={() => {
              setcharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput"> Character </label>
        </div>
        
      </div>
    </div>
  )
}

export default App;
