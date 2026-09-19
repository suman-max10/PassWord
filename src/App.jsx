/** @format */

import React, { useState, useCallback } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>/?";

    for (let index = 0; index < length; index += 1) {
      const characterIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(characterIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = () => {
    if (password) navigator.clipboard.writeText(password);
  };

  return (
    <main className='min-h-screen bg-slate-900 px-4 py-8 text-white'>
      <div className='mx-auto w-full max-w-md rounded-lg bg-slate-800 p-4 shadow-md'>
        <h1 className='my-3 text-center text-2xl font-bold text-orange-500'>
          Password Generator
        </h1>
        <div className='mb-4 flex overflow-hidden rounded-lg shadow'>
          <input
            type='text'
            value={password}
            className='w-full px-3 py-2 text-slate-900 outline-none'
            placeholder='Password'
            readOnly
          />
          <button
            className='shrink-0 bg-blue-700 px-3 py-2 text-white hover:bg-blue-600'
            onClick={copyPassword}>
            Copy
          </button>
        </div>
        <button
          className='mb-4 w-full rounded bg-orange-500 px-3 py-2 font-semibold text-slate-900 hover:bg-orange-400'
          onClick={passwordGenerator}>
          Generate Password
        </button>
        <label className='mb-4 block'>
          Length: {length}
          <input
            className='mt-2 w-full accent-orange-500'
            type='range'
            min='4'
            max='32'
            value={length}
            onChange={(event) => setLength(Number(event.target.value))}
          />
        </label>
        <label className='mr-4'>
          <input
            className='mr-2'
            type='checkbox'
            checked={numberAllowed}
            onChange={(event) => setNumberAllowed(event.target.checked)}
          />
          Numbers
        </label>
        <label>
          <input
            className='mr-2'
            type='checkbox'
            checked={charAllowed}
            onChange={(event) => setCharAllowed(event.target.checked)}
          />
          Special characters
        </label>
      </div>
    </main>
  );
};

export default App;
