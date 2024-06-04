
import IsLoafing from "../04-MultipleCustomHooks/IsLoafing";
import PokemonCard from "../04-MultipleCustomHooks/PokemonCard";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch" 



interface Data {
    name: string;
    sprites: {
        front_default: string;
        back_default: string;
        front_shiny: string;
        back_shiny: string;
    }
    id: number;
} 


export const Layout = () => {

    const {decrement, increment,counter} = useCounter(1);

    const {
        data,
        isLoading,
        hasError
    }
 = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    if(isLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }
    

  return (
    <div>
        <h1>Informacion de Pokemon</h1>
        <hr />
        {
            hasError ? <div className="alert alert-danger">Error</div> : null
        }

        {
            isLoading ? <IsLoafing /> : <PokemonCard name={data.name} sprites={[
                data.sprites.front_default ,
                data.sprites.back_default,
                data.sprites.front_shiny,
                data.sprites.back_shiny
            ]} number={data.id} />
        }

        <button onClick={( ) => increment(1)} className="btn btn-primary">Siguiente</button>
        <button onClick={( ) => decrement(1)} className="btn btn-primary">Anterior</button>

        <pre>
            {data ? JSON.stringify(data.name, null, 3) : 'No hay data'}
        </pre>
    </div>
  )
}


