import Link from 'next/link';
import React, { useEffect } from 'react';
import { getProducts } from '@/firebase/products';
import { getCategories } from '@/firebase/category';

export default function Services() {
    const [products, setProducts] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [selectedCat, changeSelectedCat] = React.useState("all");
    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products);
        });
        getCategories().then((categories) => {
            setCategories(categories);
        });

    }, []);
    return (<section className='bg-[#F9FAFF] flex flex-col items-center justify-evenly flex-wrap px-[5vmin] md:px-[10vmin] lg:px-[15vmin] pb-[15vmin] shadow-md'>
        <h1 className='text-[#651a57] text-[7vmin] font-bold mt-[5vmin] headingfont'>Our Services</h1>
        <p className='text-[#333] text-[3vmin] secondaryfont primarytext w-[90%] text-center font-bold mb-[5vmin]'>A modern unique style</p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
        <div className="group flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hoverbg" onClick={()=>changeSelectedCat('All')}>
                <i className="fa-solid fa-shirt primarytext text-[5vmin] cursor-pointer transition-all"></i>
                <h1 className='text-[#651a57] group-hover:text-white text-[2vmin] font-bold py-[1vmin] headingfont'>
                {
                    "All"
                }
                </h1>
            </div>
            {
                categories.map((category) => (
                <div className="group flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hoverbg" onClick={()=>changeSelectedCat(category.name)}
                key={
                    category.id
                }
                >
                <i className="fa-solid fa-shirt primarytext text-[5vmin] cursor-pointer transition-all"></i>
                <h1 className='text-[#651a57] group-hover:text-white text-[2vmin] font-bold py-[1vmin] headingfont'>
                {
                    category.name
                }
                </h1>
            </div>)
            )
            }
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {products.map((product) => (selectedCat.toLowerCase() == "all" || selectedCat.toLowerCase() === product.category.toLowerCase())?(
                <div className="flex flex-col items-center justify-start pb-[2.5vmin] min-h-[60vmin] w-[60vmin] md:w-[40vmin] m-[3vmin] bg-[#fff] shadow-md" key={product.id}>
                    <img className='w-full h-[70%]' src={product.image} alt="" />
                    <p className='text-[#333] text-[2.5vmin] secondaryfont w-[90%] py-[1vmin] text-center'>{product.name}</p>
                    <h1 className='text-[#651a57] text-[2vmin] font-bold headingfont'>Rs.99 | 3 &#9733; | 5km away</h1>
                    <div className="flex flex-row mt-[3vmin]">
                        <button className='border-none outline-none primary hover:scale-105 mr-2 py-[1vmin] transition-all hover:bg-[#ffffffd8]'>
                            <Link href={`/product/${product.id}`} className='mx-[2.5vmin] text-[2vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 text-white'>Buy Now</Link>
                        </button>
                        <button className='border-none outline-none primary hover:scale-105 ml-2 py-[1vmin] transition-all hover:bg-[#ffffffd8]'>
                            <Link href={`/product/${product.id}`} className='mx-[2.5vmin] text-[2vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 text-white'>Book</Link>
                        </button>
                    </div>
                </div>
            ):(<></>)
            )
            }

        </div>
    </section>
    )
}
