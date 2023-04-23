import { categoryRef } from "./config";
import { getDocs, query, where, collection, getDoc, doc, addDoc } from "firebase/firestore";


export const getCategories = async () => {
    const categories = [];
    const querySnapshot = await getDocs(categoryRef);
    querySnapshot.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
    });
    return categories;
};


export const getCategoriesType = async () => {
    const categoriesType = [];
    const querySnapshot = await getDocs(categoryRef);
    querySnapshot.forEach((doc) => {
        categoriesType.push(doc.data().type.toLowerCase());
    });
    return Array.from(new Set(categoriesType));
};


export const getCategoriesByType = async (type) => {
    const categories = [];
    const q = query(categoryRef, where("type", "==", type));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
    });
    return categories;
};

export const createCategory = async (category) => {
    const docRef = await addDoc(categoryRef, category);
    return docRef.id;
}
