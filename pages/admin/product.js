import { createProduct, getProducts } from "@/firebase/products";
import { useEffect, useState } from "react"

function product() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({})
    useEffect(() => {
            const fetchProducts = async () => {
                const products = await getProducts();
                setProducts(products);
            };
            fetchProducts();
            console.log(products)
        }
    , [])
    function createNewProduct(){
        createProduct(
            newProduct.name,
            newProduct.price,
            newProduct.description,
            newProduct.category,
            newProduct.image
        )
    }
    return (
        <div>
            <h1>Product</h1>
            <table style={{border:"2px solid red"}} className="border">
                <tbody>
                    {products.map((product,i)=>{
                        return(
                            <tr className="border-2" key={i}>
                                <td className="border-2">{product.name}</td>
                                <td className="border-2">{product.price}</td>
                                <td className="border-2">{product.description}</td>
                                <td className="border-2">{product.category}</td>
                                <td className="border-2">
                                    <img src={product.image} alt={product.name} width={50}/></td>
                            </tr>
                        )
                    }
                    )}
                    {
                        <tr className="border-2">
                            <td className="border-2"><input placeholder="Product Name" value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})} /></td>
                            <td className="border-2"><input placeholder="Product Price" value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})} /></td>
                            <td className="border-2"><input placeholder="Product Description" value={newProduct.description} onChange={(e)=>setNewProduct({...newProduct,description:e.target.value})} /></td>
                            <td className="border-2"><input placeholder="Product Category" value={newProduct.category} onChange={(e)=>setNewProduct({...newProduct,category:e.target.value})} /></td>
                            <td className="border-2"><input placeholder="Product Image" value={newProduct.image} onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})} /></td>

                            
                        </tr>
                    }
                    {
                        <tr className="border-2">
                            <td className="border-2" colSpan={5}><button onClick={createNewProduct}>Create Product</button></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default product