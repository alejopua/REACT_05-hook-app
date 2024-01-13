import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const Memorize = () => {
  const [show, setShow] = useState(true)
  const { counter, increment } = useCounter();

  return (
    <><h1>counter: {<Small value={counter}/>}</h1>
      <hr />
      <button onClick={ increment } className="btn btn-primary">+1</button>
      
      <button 
        onClick={ () => setShow(!show) } 
        className="btn btn btn-info"
      >
        show/hide:
        <strong>
          {JSON.stringify(show)}
        </strong>
      </button>
    </>
  )
}
