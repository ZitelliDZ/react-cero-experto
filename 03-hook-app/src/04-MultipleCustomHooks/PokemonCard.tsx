import { useLayoutEffect, useRef, useState } from "react";


interface PokemonCardProps {
    name: string;
    sprites: string[];
    number: number;
}

const PokemonCard = ( { name, sprites, number }: PokemonCardProps ) => {

  const pRef = useRef<HTMLDivElement>(null);
  const [boxSize, setBoxSize] = useState({width : 0, height: 0});
  useLayoutEffect(() => {
    
    const bounding = pRef.current?.getBoundingClientRect();
    setBoxSize({
      width: bounding?.width || 0,
      height: bounding?.height || 0
    })

  }
  , [number])


  return (
    <div className="card">
        
      <div className="card-body" style={{ display: 'flex'}}>
        
        <h5 className="card-title">{name}</h5> 
        <p className="card-text" ref={pRef} 
        >Pokemon number: {number}</p>
        {
            sprites.map((sprite, index) => (
                <img key={index} src={sprite} alt={name} />
            ))
        }
      </div>

        <code>{
            JSON.stringify(boxSize, null, 2)
          }</code>
      
    </div>
  )
}

export default PokemonCard
