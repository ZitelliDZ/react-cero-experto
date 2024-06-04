


import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Note {
    id: string;
    date: number;
    title: string;
    body: string;
    imageUrls: string[];
}

export interface JournalState {
    isSaving: boolean;
    saveMessage: string;
    notes:Note[]
    active: Note | null;
}

const initialState: JournalState = {
    isSaving: false,
    saveMessage: '',
    notes:[],
    active: null
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: { 
        savingNewNote: (state) => {
            state.isSaving = true 
        },
        addNewEmptyNote: (state,action : PayloadAction<Note>) => {
            state.isSaving = false
            state.notes.push(action.payload)
             
        },
        setActiveNote: (state,action : PayloadAction<Note>) => {
            state.active = action.payload
            state.saveMessage = '';
        },
        setNotes: (state,action :  PayloadAction<Note[]>) => {
            state.notes = action.payload
        },
        setSaving: (state) => {
           state.isSaving = true
           state.saveMessage = '';

        },
        updateNote: (state,action : PayloadAction<Note>) => {
            state.isSaving = false
            state.notes = state.notes.map(note => note.id === action.payload.id ? action.payload : note)

            state.saveMessage = `${action.payload.title}, actualizado correctamente`;
        },
        setPhotosToActiveNote: (state,action : PayloadAction<string[]>) => {
            if (state.active === null )  return;
            const img = state.active.imageUrls || [];
            state.active.imageUrls = [...img , ...action.payload]
            state.saveMessage = `Imagenes guardadas correctamente`;
            state.isSaving = false
        },
        deleteNoteById: (state,action : PayloadAction<JournalState>) => {
            state.note = state.note.filter(note => note.id !== action.payload.id)
        }
    },
})

// Action creators are generated for each case reducer function
export const { savingNewNote,addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, setPhotosToActiveNote } = journalSlice.actions
