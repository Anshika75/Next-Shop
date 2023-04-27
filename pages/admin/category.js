import { useAuth } from '@/contexts/authContext';
import { getCategories } from '@/firebase/category'
import { useEffect, useState } from 'react';
function category() {
    const [categories, setCategories] = useState([]);
    const [newCatName, setNewCatName] = useState('');
    const [newCatType, setNewCatType] = useState('');
    const {user} = useAuth();
    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await getCategories();
            setCategories(categories);
        };
        fetchCategories();
        console.log(categories)
    }, []);



    return (
      <div>
        <h1>Categories</h1>
        <table style={{ border: "2px solid red" }} className="border">
        <tbody>

       
          {categories.map((cat, i) => {
            return (
              <tr className="border-2" key={i}>
                <td className="border-2">{cat.name}</td>
                <td className="border-2">{cat.type}</td>
              </tr>
            );
          })}
          {
            <tr className="border-2">
              <td className="border-2"><input placeholder="Category Name" value={newCatName} onChange={(e)=>setNewCatName(e.target.value)} /></td>
              <td className="border-2"><input placeholder="Category Name" value={newCatType} onChange={(e)=>setNewCatType(e.target.value)} /></td>
            </tr>
          }
          {
            <tr className="border-2">
              <td className="border-2 bg-purple-600" colSpan={2}><button onClick={
                ()=>createCategory({name: newCatName,type: newCatType,by:user})
              }>Create Category</button></td>
            </tr>
          }
          </tbody>
        </table>
      </div>
    );
}

export default category