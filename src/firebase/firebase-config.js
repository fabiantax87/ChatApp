// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5wG7C4hrOXHHhAns77VjWzGxMyXRj3tI",
  authDomain: "chatapp-33a86.firebaseapp.com",
  databaseURL: "https://chatapp-33a86-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatapp-33a86",
  storageBucket: "chatapp-33a86.appspot.com",
  messagingSenderId: "283103122978",
  appId: "1:283103122978:web:ea7de2fee6cf01c0981c7b",
  measurementId: "G-8JPZZKYTLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);