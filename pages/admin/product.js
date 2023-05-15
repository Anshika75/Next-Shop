import { useAuth } from "@/contexts/authContext";
import { getCategories } from "@/firebase/category";
import { createProduct, getProducts } from "@/firebase/products";
import { useEffect, useState } from "react"

function product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newProduct, setNewProduct] = useState({});
    const { user } = useAuth();
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            const categories = await getCategories();
            setProducts(products);
            setCategories(categories);
        };
        fetchProducts();
        console.log(products)
    }
        , [])
    function createNewProduct() {
        createProduct(
            newProduct.name,
            newProduct.price,
            newProduct.description,
            newProduct.category,
            newProduct.image,
            user
        )
    }
    return (
        <div className="bg-[#F9FAFF] flex flex-col items-center justify-evenly flex-wrap px-[5vmin] md:px-[10vmin] lg:px-[15vmin] pb-[15vmin] shadow-md">
            <h1 className='text-[#651a57] text-[7vmin] font-bold mt-[5vmin] headingfont text-center'>Our Products</h1>
            <p className='text-[#333] text-[3vmin] secondaryfont primarytext w-[90%] text-center font-bold mb-[5vmin]'>Best products at your comfort</p>
            <table style={{ border: "2px solid red" }} className="border">
                <tbody>
                    <tr className="border-2 text-center primaryfont primary text-white">
                        <th className="border-2 p-[2vmin]">Name</th>
                        <th className="border-2 p-[2vmin]">Price</th>
                        <th className="border-2 p-[2vmin]">Description</th>
                        <th className="border-2 p-[2vmin]">Category</th>
                        <th className="border-2 p-[2vmin]">Image</th>
                    </tr>
                    {products.map((product, i) => {
                        return (
                            <tr className="border-2 text-center secondaryfont" key={i}>
                                <td className="border-2">{product.name}</td>
                                <td className="border-2">{product.price}</td>
                                <td className="border-2">{product.description}</td>
                                <td className="border-2">{product.category}</td>
                                <td className="border-2 flex justify-center items-center">
                                    <img src={product.image} alt={product.name} width={50} /></td>
                            </tr>
                        )
                    }
                    )}
                    {
                        <tr className="border-2">
                            <td className="border-2 p-[2vmin]"><input className="bg-[#ffadbe] p-[1vmin] w-full text-center placeholder:text-center text-black placeholder:text-[#777] placeholder:secondaryfont" placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} /></td>
                            <td className="border-2 p-[2vmin]"><input className="bg-[#ffadbe] p-[1vmin] w-full text-center placeholder:text-center text-black placeholder:text-[#777] placeholder:secondaryfont" placeholder="Product Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} /></td>
                            <td className="border-2 p-[2vmin]"><input className="bg-[#ffadbe] p-[1vmin] w-full text-center placeholder:text-center text-black placeholder:text-[#777] placeholder:secondaryfont" placeholder="Product Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} /></td>
                            <td className="border-2 p-[2vmin]">{
                                <select className="bg-[#ffadbe] p-[1vmin] w-full text-center placeholder:text-center text-black placeholder:text-[#777] placeholder:secondaryfont" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}>
                                    <option value="" disabled selected hidden>Choose Category</option>
                                    {categories.map((category, i) => {
                                        return (
                                            <option key={i} value={category.name}>{category.name}</option>
                                        )
                                    }
                                    )}
                                </select>
                            }</td>
                            <td className="border-2 p-[2vmin]"><input className="bg-[#ffadbe] p-[1vmin] w-full text-center placeholder:text-center text-black placeholder:text-[#777] placeholder:secondaryfont" placeholder="Product Image" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} /></td>
                        </tr>
                    }
                    {
                        <tr className="border-2 text-center">
                            <td className="border-2 p-[2vmin]" colSpan={5}>
                                <button onClick={createNewProduct} className='border-none outline-none primary hover:scale-105 ml-2 py-[1vmin] transition-all hover:bg-[#ffffffd8]'>
                                    <p className='mx-[2.5vmin] text-[2vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 text-white'>Create Product</p>
                                </button>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default product