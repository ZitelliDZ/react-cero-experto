import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../config/firebase/firebase";



export const loadNotes = async (uid='') => {

    if (!uid) throw new Error('No user id found');

    const notesCollection = collection(firebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(notesCollection);
 
    const notes:any = [];

    docs.forEach(doc => {
        notes.push({
            id: doc.id,
            ...doc.data()
        })        
    });

    return notes;
 
}