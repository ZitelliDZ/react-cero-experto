
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "./firebase";

  const providerGoogle = new GoogleAuthProvider();



const auth = getAuth();

export const signInWithGoogle = async () => {

   try {
    const result = await signInWithPopup( firebaseAuth, providerGoogle);

    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    //const token = credentials.accessToken;

    const user = result.user;
    return {
        ok:true,
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
    }


   } catch (error) {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
        ok: false,
        message:  errorMessage,
        code: errorCode
    }
    
   }
   
}



export const registerUserWithEmailAndPassword = async (email: string, password: string, name: string) => {
    
    try {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;
        await updateProfile(firebaseAuth.currentUser, {
            displayName: name
        });
        return {
            ok: true,
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            message:  errorMessage,
            code: errorCode
        }
    }
}

export const loginWithEmailAndPassword = async (email: string, password: string) => {

    try {
        const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;
        return {
            ok: true,
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            message:  errorMessage,
            code: errorCode
        }
    }
}

export const logoutFirebase = async () => {
   return await firebaseAuth.signOut();
}
  