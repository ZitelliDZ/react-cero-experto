import { memo } from "react";



interface ShowIncrementProps {
    increment: (counter: number) => void;
 }

export const ShowIncrement = memo(( {increment}: ShowIncrementProps ) => {

    console.log('Me volví a llamar :(')
  return (
    <div>
        <button 
            className="btn btn-primary"
            onClick={()=>increment(5)}
        >
            Increment

        </button>
      
    </div>
  )
})


