import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { startNewNote } from "../../../src/store/journal";
import { addNewEmptyNote, savingNewNote } from "../../../src/store/journal/journalSlice";
import { FirebaseDB } from "../../../src/firebase/config";



describe("Pruebas en el archivo journal Thunks", () => {

    const dispatch = jest.fn();
    const getState = jest.fn();
    
    beforeEach(() => {
        jest.clearAllMocks();
    });
  
  
    test("Debe de crear una nueva nota startNewNote", async() => {
        
        const uid = 'TEST23';
        getState.mockReturnValue({ auth: { uid } });

        await startNewNote()(dispatch, getState);

        expect( dispatch ).toHaveBeenCalledWith(savingNewNote() );
        expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({
            body:'',
            title:'',
            date: expect.any(Number),
            id: expect.any(String)
        }) );

        // borrar de firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deletePromises = [];
        docs.forEach( doc => {
            deletePromises.push( deleteDoc(doc.ref) );
        }); 


        await Promise.all(deletePromises);

    });
});
