// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions"
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-rwxK-0S-GG0bVLffPa01caPfRv6VQnk",
  authDomain: "dbdtracker.firebaseapp.com",
  projectId: "dbdtracker",
  storageBucket: "dbdtracker.appspot.com",
  messagingSenderId: "167066146805",
  appId: "1:167066146805:web:1dbc2d32e58165859bb2bc",
  measurementId: "G-TR7R7E24R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);
const useSignOut = signOut(auth);
// const analytics = getAnalytics(app);

export {db, auth, app, useSignOut, functions}