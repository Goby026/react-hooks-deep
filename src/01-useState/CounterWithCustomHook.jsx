import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, reset, decrement} = useCounter(1);

  return (
    <>
        <h1>Counter with Hook: {counter}</h1>
        <hr />

        <button onClick={ ()=> increment(2)}>+2</button>
        <button onClick={reset}>Reset</button>
        <button onClick={()=>decrement(2)}>-2</button>
    </>
  )
}
