import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA79q8Akts_7Z33lMjK2zP5HAgp88xqtog",
  authDomain: "coffee-fea38.firebaseapp.com",
  projectId: "coffee-fea38",
  storageBucket: "coffee-fea38.appspot.com",
  messagingSenderId: "106642060418",
  appId: "1:106642060418:web:6816b37e9bd6e4e0e3309b"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)