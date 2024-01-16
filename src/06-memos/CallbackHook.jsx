import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = useCallback(
    (value) => {
      setCounter( (c) => c + value ); 
    },
    [],
  )  

  return (
    <>
      <h1>Counter: { counter }</h1>
      <hr />

      {/* This component is wrapped with React.memo */}
      <ShowIncrement increment={ handleIncrement }/> 
    </>
  )
}
