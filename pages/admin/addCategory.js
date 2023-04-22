import { createCategory, getCategoriesType } from "@/firebase/category";
import { useEffect, useState } from "react";

export default function Page() {
    const [name,setname] = useState("");
    const [type,settype] = useState("");

    const [allCategoriesType, setAllCategoriesType] = useState([]);

    useEffect(() => {
        const fetchCategoriesType = async () => {
            const categoriesType = await getCategoriesType();
            setAllCategoriesType(categoriesType);
        };
        fetchCategoriesType();
    }, []);

    console.log(allCategoriesType);

    const create = async () => {
        const id = await createCategory({
        name: name,
        type: type
        });
        console.log(id);
    };
    return (
        <>
        <input placeholder="Category Name" value={name} onChange={(e)=>setname(e.target.value)} />
        <br />
        <select name="cattype" id="">
            {
                allCategoriesType.map(
                    (cat,i)=>{
                        return <option key={i} value={cat} onChange={(e)=>settype(cat)}>{cat}</option>
                    }
                )
            }
        </select>
        <br />
        or <br />
        <input placeholder="Category Type" value={type} onChange={(e)=>settype(e.target.value)} />
        <br />
        <button onClick={create}>Create</button>
        </>
    );
    }