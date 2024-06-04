import { useEffect, useState } from "react"
import { getPokemons } from "./store/slices/pokemon/thunks"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from './store/store'



export const PokemonApp = () => {
 
    const dispatch: AppDispatch  = useDispatch()
    const {isLoading, pokemons,page} = useSelector((state: RootState) => state.pokemon)

    useEffect(() => {
        dispatch(getPokemons(0))
    }
    , [])

    const handleIncrement = () => { 
        
        dispatch(getPokemons(page))
    }
  return (
    <div>
        <h1>Pokemon App</h1>
        <hr />
        {isLoading && <p>Loading...</p>}
        <button onClick={handleIncrement} disabled={isLoading} >Load More</button>
        <ol>
            {pokemons.map((pokemon:any) => ( 
                <li key={pokemon.name}>{pokemon.name} -{pokemon.url.split('/')[pokemon.url.split('/').length - 2]}</li>
            ))}
        </ol>
      
    </div>
  )
}
 
