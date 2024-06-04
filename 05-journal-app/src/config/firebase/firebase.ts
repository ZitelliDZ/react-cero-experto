// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6xb1a4nvppriavFgDO7x8G_niZUjUwsQ",
  authDomain: "react-journal-add4e.firebaseapp.com",
  projectId: "react-journal-add4e",
  storageBucket: "react-journal-add4e.appspot.com",
  messagingSenderId: "259519923429",
  appId: "1:259519923429:web:14e97c869393effae2800c"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);