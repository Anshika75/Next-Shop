import { usersRef } from "./config";
import { getDocs, query, where, collection, getDoc, doc, addDoc, setDoc } from "firebase/firestore";


export const createUser = async (userObj, refId)=>{
    const userRef = doc(usersRef, refId);
    await setDoc(userRef, userObj);
    console.log("User Created")
}

export const getUser = async (refId)=>{
    const docRef = doc(usersRef, refId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}