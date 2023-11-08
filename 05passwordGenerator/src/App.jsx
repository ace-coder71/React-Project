import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="123456789"
    if(charAllowed) str+="`~!@#$%^-_+= &*()[]{};:'/?|"
    for (let index = 0; index < length; index++) {
      const char = Math.floor(Math.random()*str.length + 1)
      // console.log(char)
      pass += str.charAt(char) 
    }
    // console.log(pass.length)
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700'>
        <h1 className='text-3xl text-white text-center py-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg  mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-2 px-3 rounded-l-lg'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className='rounded-r-lg outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0'         
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2 pb-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={32}
            value={length}
            onChange={(e) => (setLength(e.target.value))}
             />
             <label htmlFor="password Length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
             />
             <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
