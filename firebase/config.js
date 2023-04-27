import { initializeApp, getApps } from "firebase/app";
import {getFirestore, collection } from "firebase/firestore"
// Import getAuth
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA3K3rmsRzX-1Yf2Fb7hWCGkvjxhXIOGPg",
  authDomain: "next-authh.firebaseapp.com",
  projectId: "next-authh",
  storageBucket: "next-authh.appspot.com",
  messagingSenderId: "1031838106797",
  appId: "1:1031838106797:web:b8f343d25d04e64724b224",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export default app;
export const db = getFirestore(app);
export const auth = getAuth(app);
export const categoryRef = collection(db,"categories");
export const productRef = collection(db,"products");
export const usersRef = collection(db, "users")
