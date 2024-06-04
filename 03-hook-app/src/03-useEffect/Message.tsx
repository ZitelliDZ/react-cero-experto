import { useEffect, useState } from "react"


export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        
       const onMouseEvent = (e: MouseEvent) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
        }

        //window.addEventListener('mousemove',  onMouseEvent);

        return () => {
           
            //window.removeEventListener('mousemove',  onMouseEvent);

        }
    }, []);

    return (
        <>
            <h3>Usuario ya existe!</h3>
            <p>
                x: { coords.x } y: { coords.y }
            </p>
        </>
    )
}