import { useState, useMemo } from "react";
import { useCounter } from "../hooks/useCounter"

const counterFor = (limit) => {
  for (let i = 0; i < limit; i++) {
    console.log('corre...')
  }
  return `${limit}`
}

export const MemoHook = () => {
  const [show, setShow] = useState(true)
  const { counter, increment } = useCounter(4000);

  const value = useMemo(() => counterFor(counter),[counter])

  return (
    <><h1>counter: <small>{ counter }</small></h1>
      <hr />

      <h4>value: { value }</h4>

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
