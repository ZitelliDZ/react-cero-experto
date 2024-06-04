import { useState } from "react"



export const useCounter = (initialState: number = 10) => {

    
    const [counter, setCounter] = useState(initialState)
    
    const increment = (value = 1) => {
        if (counter === 120) return;
        setCounter((counter) => counter + value)
    }
    
    const decrement = (value = 1) => {
        if (counter === 0) return;
        setCounter((counter) => counter -  value)
    }
    
    const reset = () => {
        setCounter(initialState)
    }
    
    return {
        counter,
        increment,
        decrement,
        reset
    }
}