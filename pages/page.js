import { createCategory } from "@/firebase/category";

export default function Page() {
    const create = async () => {
        const id = await createCategory({
        name: "Clothings",
        type: "Jeans"
        });
        console.log(id);
    };
    return (
        <>
        <button onClick={create}>Create</button>
        </>
    );
    }