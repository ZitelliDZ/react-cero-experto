

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PokemonState {
    page: number
    pokemons: any[]
    isLoading: boolean
}

const initialState: PokemonState = {
    page: 0,
    pokemons: [],
    isLoading: false,
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: { 
        startLoadingPokemons: (state ) => {
           state.isLoading = true
        },
        // setPokemons({pokemons : data.results, page: page + 1})
        setPokemons: (state, action: PayloadAction<{pokemons: any[], page: number}>) => {
            state.isLoading = false
            state.page = action.payload.page
            state.pokemons = [...state.pokemons, ...action.payload.pokemons]

        },

    },
})

// Action creators are generated for each case reducer function
export const { 


    startLoadingPokemons,
    setPokemons,
    
    

    
 } = pokemonSlice.actions
