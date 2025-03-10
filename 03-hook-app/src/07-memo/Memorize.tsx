import { useState } from "react"
import { useCounter } from "../hooks/useCounter" 
import { Small } from "./Small";






export const Memorize = () => {

    const { counter, increment, decrement } = useCounter(10);
    const [show, setShow] = useState(true);

    


  return (
    <div>
        <h1>Memorize</h1>
        <hr />
        <h2>Counter: <Small counter={counter} /></h2>
        <button className="btn btn-primary" onClick={()=>increment()}>+1</button>
        <button className="btn btn-danger" onClick={()=>decrement()}>-1</button>

        <button className="btn btn-outline-primary ml-3" onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
      
    </div>
  )
}
