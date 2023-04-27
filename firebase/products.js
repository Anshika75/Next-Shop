import { productRef } from "./config";
import { getDocs, query, where, collection, getDoc, doc, addDoc } from "firebase/firestore";

export const getProducts = async () => {
    const products = [];
    const querySnapshot = await getDocs(productRef);
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

export const getProductsByCategory = async (category) => {
    const products = [];
    const q = query(productRef, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

export const createProduct = async(name,price,description,category,image,user)=>{
    const docRef = await addDoc(productRef,{
        name,
        price,
        description,
        category,
        image,
        by:user
    });
    return docRef.id;
}
