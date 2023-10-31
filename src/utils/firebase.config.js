import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "YOUR APIKEY",
  authDomain: "YOUR ATUODOMAIN",
  projectId: "YOUR PROJECTID",
  storageBucket: "YOUR DATA",
  messagingSenderId: "YOUR DATA",
  appId: "YOUR DATA"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
