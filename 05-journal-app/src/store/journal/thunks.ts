import { addDoc, collection, doc, setDoc } from "firebase/firestore/lite";
import { AppDispatch, RootState } from "../store";
import { firebaseDB } from "../../config/firebase/firebase";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth;

    if (!uid) throw new Error("No user id found");

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setSaving());
    const { active } = getState().journal;
    const { uid } = getState().auth;

    if (!active) return;

    const note = { ...active };
    delete note.id;

    try { 
      const noteDoc = doc( firebaseDB, `${ uid }/journal/notes/${ active.id }` );
      await setDoc( noteDoc, note, { merge: true }); 

      dispatch(setActiveNote(active));
      dispatch(updateNote(active));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startSavingImageCoudinary = (files: File[]) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setSaving());

    const fileUploadPromises:string[] = [];

    for (const file of files) { 
      fileUploadPromises.push(fileUpload(file));
    }
    const imageUrls = await Promise.all(fileUploadPromises); 

    dispatch(setPhotosToActiveNote(imageUrls));
    dispatch(startSaveNote());
  };
};
