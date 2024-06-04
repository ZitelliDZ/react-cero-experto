import { memo } from "react"


 
export const Small = memo(({counter}: {counter: number}) => {

    console.log('Me volví a llamar :(')
  return (
    <small>{counter}</small>
  )
})
