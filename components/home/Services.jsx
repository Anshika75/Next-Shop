import React from 'react'

export default function Services() {
    return (
        <section className='bg-[#F9FAFF] flex flex-col items-center justify-evenly flex-wrap px-[5vmin] md:px-[10vmin]  lg:px-[15vmin] pb-[25vmin]'>
            <h1 className='text-[#651a57] text-[7vmin] font-bold mt-[5vmin] headingfont'>Our Services</h1>
            <p className='text-[#333] text-[3vmin] secondaryfont primarytext w-[90%] text-center font-bold mb-[5vmin]'>A modern unique style</p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
                <div className="group flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hoverbg">
                    <i className="fa-solid fa-cart-flatbed-suitcase primarytext text-[5vmin] cursor-pointer transition-all"></i>
                    <h1 className='text-[#651a57] group-hover:text-white text-[2vmin] font-bold py-[1vmin] headingfont'>All</h1>
                </div>
                <div className="group flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hoverbg">
                    <i className="fa-solid fa-shirt primarytext text-[5vmin] cursor-pointer transition-all"></i>
                    <h1 className='text-[#651a57] group-hover:text-white text-[2vmin] font-bold py-[1vmin] headingfont'>Fashion</h1>
                </div>
                <div className="group hidden md:flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hoverbg">
                    <i className="fa-solid fa-headphones primarytext text-[5vmin] cursor-pointer transition-all"></i>
                    <h1 className='text-[#651a57] group-hover:text-white text-[2vmin] font-bold py-[1vmin] headingfont'>Accessories</h1>
                </div>
                <div className="group flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hoverbg">
                    <i className="fa-solid fa-pen-ruler primarytext text-[5vmin] cursor-pointer transition-all"></i>
                    <h1 className='text-[#651a57] group-hover:text-white text-[2vmin] font-bold py-[1vmin] headingfont'>Stationery</h1>
                </div>
                <div className="group flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hoverbg">
                    <i className="fa-solid fa-bolt primarytext text-[5vmin] cursor-pointer transition-all"></i>
                    <h1 className='text-[#651a57] group-hover:text-white text-[2vmin] font-bold py-[1vmin] headingfont'>Electronics</h1>
                </div>
                <div className="group flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hoverbg">
                    <i className="fa-solid fa-couch primarytext text-[5vmin] cursor-pointer transition-all"></i>
                    <h1 className='text-[#651a57] group-hover:text-white text-[2vmin] font-bold py-[1vmin] headingfont'>Furniture</h1>
                </div>
                <div className="group flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hoverbg">
                    <i className="fa-solid fa-square-plus primarytext text-[5vmin] cursor-pointer transition-all"></i>
                    <h1 className='text-[#651a57] group-hover:text-white text-[2vmin] font-bold py-[1vmin] headingfont'>More</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div className="flex flex-col items-center justify-start pb-[2.5vmin] min-h-[60vmin] w-[60vmin] md:w-[40vmin] m-[3vmin] bg-[#fff] shadow-md">
                    <img className='w-full h-[70%]' src="http://demo.templatin.com/uniqueshop17/22-home_default/plain-cotton-blend-trousers.jpg" alt="" />
                    <p className='text-[#333] text-[2.5vmin] secondaryfont w-[90%] py-[1vmin] text-center'>Plain Cotton Blend Trousers</p>
                    <h1 className='text-[#651a57] text-[2vmin] font-bold headingfont'>Rs.99 | 3 &#9733; | 5km away</h1>
                    <div className="flex flex-row mt-[3vmin]">
                    <button className='border-none outline-none primary hover:scale-105 mr-2 py-[1vmin] transition-all hover:bg-[#ffffffd8]'>
                        <a href="" className='mx-[2.5vmin] text-[2vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 text-white'>Buy Now</a>
                    </button>
                    <button className='border-none outline-none primary hover:scale-105 ml-2 py-[1vmin] transition-all hover:bg-[#ffffffd8]'>
                        <a href="" className='mx-[2.5vmin] text-[2vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 text-white'>Book</a>
                    </button>
                </div>
                </div>
                <div className="flex flex-col items-center justify-start pb-[2.5vmin] min-h-[60vmin] w-[60vmin] md:w-[40vmin] m-[3vmin] bg-[#fff] shadow-md">
                    <img className='w-full h-[70%]' src="http://demo.templatin.com/uniqueshop17/22-home_default/plain-cotton-blend-trousers.jpg" alt="" />
                    <p className='text-[#333] text-[2.5vmin] secondaryfont w-[90%] py-[1vmin] text-center'>Plain Cotton Blend Trousers</p>
                    <h1 className='text-[#651a57] text-[2vmin] font-bold headingfont'>Rs.99 | 3 &#9733; | 5km away</h1>
                    <div className="flex flex-row mt-[3vmin]">
                    <button className='border-none outline-none primary hover:scale-105 mr-2 py-[1vmin] transition-all hover:bg-[#ffffffd8]'>
                        <a href="" className='mx-[2.5vmin] text-[2vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 text-white'>Buy Now</a>
                    </button>
                    <button className='border-none outline-none primary hover:scale-105 ml-2 py-[1vmin] transition-all hover:bg-[#ffffffd8]'>
                        <a href="" className='mx-[2.5vmin] text-[2vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 text-white'>Book</a>
                    </button>
                </div>
                </div>
                <div className="flex flex-col items-center justify-start pb-[2.5vmin] min-h-[60vmin] w-[60vmin] md:w-[40vmin] m-[3vmin] bg-[#fff] shadow-md">
                    <img className='w-full h-[70%]' src="http://demo.templatin.com/uniqueshop17/22-home_default/plain-cotton-blend-trousers.jpg" alt="" />
                    <p className='text-[#333] text-[2.5vmin] secondaryfont w-[90%] py-[1vmin] text-center'>Plain Cotton Blend Trousers</p>
                    <h1 className='text-[#651a57] text-[2vmin] font-bold headingfont'>Rs.99 | 3 &#9733; | 5km away</h1>
                    <div className="flex flex-row mt-[3vmin]">
                    <button className='border-none outline-none primary hover:scale-105 mr-2 py-[1vmin] transition-all hover:bg-[#ffffffd8]'>
                        <a href="" className='mx-[2.5vmin] text-[2vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 text-white'>Buy Now</a>
                    </button>
                    <button className='border-none outline-none primary hover:scale-105 ml-2 py-[1vmin] transition-all hover:bg-[#ffffffd8]'>
                        <a href="" className='mx-[2.5vmin] text-[2vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 text-white'>Book</a>
                    </button>
                </div>
                </div>
                <div className="flex flex-col items-center justify-start pb-[2.5vmin] min-h-[60vmin] w-[60vmin] md:w-[40vmin] m-[3vmin] bg-[#fff] shadow-md">
                    <img className='w-full h-[70%]' src="http://demo.templatin.com/uniqueshop17/22-home_default/plain-cotton-blend-trousers.jpg" alt="" />
                    <p className='text-[#333] text-[2.5vmin] secondaryfont w-[90%] py-[1vmin] text-center'>Plain Cotton Blend Trousers</p>
                    <h1 className='text-[#651a57] text-[2vmin] font-bold headingfont'>Rs.99 | 3 &#9733; | 5km away</h1>
                    <div className="flex flex-row mt-[3vmin]">
                    <button className='border-none outline-none primary hover:scale-105 mr-2 py-[1vmin] transition-all hover:bg-[#ffffffd8]'>
                        <a href="" className='mx-[2.5vmin] text-[2vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 text-white'>Buy Now</a>
                    </button>
                    <button className='border-none outline-none primary hover:scale-105 ml-2 py-[1vmin] transition-all hover:bg-[#ffffffd8]'>
                        <a href="" className='mx-[2.5vmin] text-[2vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 text-white'>Book</a>
                    </button>
                </div>
                </div>
            </div>
        </section>
    )
}
