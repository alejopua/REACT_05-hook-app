import { useRef } from "react"

export const FocusScreen = () => {
  const inputRef = useRef();

  const onclick = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>

      <hr />

      <input 
        ref={inputRef}
        type="text" 
        placeholder="input your name"
        className="form-control"
      />

      <button 
        className="btn btn-primary mt-3 ms-0"
        onClick={onclick}
      >
        Set Focus
      </button>
    </>
  )
}
