import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter" 
import { Small } from "./Small";


const heavyStuff = (iterations: number) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Ahí vamos...')
    }
    return `${iterations} iterations done!`;
}




export const MemoHook = () => {

    const { counter, increment, decrement } = useCounter(1000);
    const [show, setShow] = useState(true);

    const messageMemo = useMemo(() => heavyStuff(counter), [counter]);
    


  return (
    <div>
        <h1>Memorize</h1>
        <hr />

        <h6>{messageMemo}</h6>
        <h2>Counter: <Small counter={counter} /></h2>
        <button className="btn btn-primary" onClick={()=>increment()}>+1</button>
        <button className="btn btn-danger" onClick={()=>decrement()}>-1</button>

        <button className="btn btn-outline-primary ml-3" onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
      
    </div>
  )
}
