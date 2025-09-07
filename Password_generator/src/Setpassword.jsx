import React, { useState, useCallback, useEffect,useRef } from "react";

const Setpassword = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$&*";
    }

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed,setPassword]);

  const  copyPasswordToClipBoard=useCallback(()=>{
    passwordref.current?.select () 
    window.navigator.clipboard.writeText(password)
  },[password])



  return (
    <>
      <div className="w-full max-w-md mx-auto py-5 px-5 mt-4 rounded-lg shadow-md  text-orange-500 bg-gray-700 ">
        <div className="flex shadow rounded-lg overflow-hidden mb-5 bg-white mt-4  ">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            ref={passwordref}
            className="mx-2 my-2  outline-none px-3 py-2 w-full rounded-md "
          />
          <button className="bg-blue-400 outline-none px-3 shrink-0 py-1 text-white cursor-pointer copy-btn" onClick={copyPasswordToClipBoard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-3">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="numberInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setpassword;
