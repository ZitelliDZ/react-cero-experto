import { useState } from "react"


export const CounterApp = () => {
    
    const [{counter1,counter2,counter3}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })
    const handleAdd = () => {
        setCounter((counter) =>({
            ...counter,
            counter1: counter.counter1 + 1
        }))
    }
    const handleSubstract = () => {
        setCounter((counter)=>({
            ...counter,
            counter1: counter.counter1 - 1
        }))
    }
  return (
    <>
        <div className="container d-flex flex-row align-items-center justify-content-start gap-4">
        <h1>CounterApp</h1> 
        <h2>{counter1}</h2>
        <h2>{counter2}</h2>
        <h2>{counter3}</h2>
        <button className="btn btn-primary" onClick={handleAdd}>+1</button>
        <button className="btn btn-secondary" onClick={handleSubstract}>-1</button>
        </div>

      
    </>
  )
} 
