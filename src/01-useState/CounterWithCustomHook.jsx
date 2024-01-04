import { useCounter } from "../hooks/useCounter"

export default function CounterWithCustomHook() {
  const { counter } = useCounter();
  return (
    <>
      <h1>Counter With Hook: { counter } </h1>
      <hr />

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary">-1</button>
        <button className="btn btn-primary">Reset</button>
        <button className="btn btn-primary">+1</button>
      </div>
    
    </>
  )
}
