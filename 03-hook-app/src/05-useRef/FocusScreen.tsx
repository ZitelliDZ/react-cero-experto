import { useRef } from "react"




const FocusScreen = () => {

    const ref = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        ref.current?.select();
    }

  return (
    <div>
        <h1>Focus Screen</h1>
        <hr />
        <input
            ref={ref}
            type="text"
            className="form-control"
            placeholder="Su nombre"
        />
        <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
            Focus
        </button>
      
    </div>
  )
}

export default FocusScreen
