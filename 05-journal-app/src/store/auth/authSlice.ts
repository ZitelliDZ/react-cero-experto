import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoUrl: string | null;
    errorMessage: string | null;
}

const initialState: AuthState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { 
        login: (state, action: PayloadAction<AuthState>) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoUrl = action.payload.photoUrl;
            state.errorMessage = null;
        },
        logout: (state, action: PayloadAction<{errorMessage: string}>) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoUrl = null;
            state.errorMessage = action.payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
             
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions
