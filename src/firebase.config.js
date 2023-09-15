
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "YOURS",
  authDomain: "YOURS",
  projectId: "YOURS",
  storageBucket: "YOURS",
  messagingSenderId: "YOURS",
  appId: "YOURS"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
