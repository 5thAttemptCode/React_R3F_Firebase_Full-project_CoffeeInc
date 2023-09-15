// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA79q8Akts_7Z33lMjK2zP5HAgp88xqtog",
  authDomain: "coffee-fea38.firebaseapp.com",
  projectId: "coffee-fea38",
  storageBucket: "coffee-fea38.appspot.com",
  messagingSenderId: "106642060418",
  appId: "1:106642060418:web:6816b37e9bd6e4e0e3309b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)