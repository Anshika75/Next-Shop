import React from 'react'
import Image from 'next/image'

export default function Landing() {
    return (
        <div className="w-full md:h-[120vh] hero flex flex-col md:flex-row md:justify-center justify-between items-center pt-[25vmin] lg:pt-0">
            <div className="flex flex-col justify-center items-start md:w-1/2 pl-[10vmin]">
                <h1 className="text-[#fff] text-[5vmin] md:text-[5.5vmin] lg:text-[7vmin] headingfont py-[1vmin]">Welcome to NextShop</h1>
                <p className="text-[#fff] text-[3vmin] md:text-[2.5vmin] lg:text-[3vmin] secondaryfont w-[90%] py-[1vmin]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <div className="hidden md:flex flex-row">
                    <button className='border-none outline-none bg-white my-5 mr-2 py-3 transition-all hover:bg-[#ffffffd8]'>
                        <a href="" className='mx-[2.5vmin] text-[2.5vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 primarytext'>Get Started</a>
                    </button>
                    <button className='border-none outline-none bg-white my-5 ml-2 py-3 transition-all hover:bg-[#ffffffd8]'>
                        <a href="" className='mx-[2.5vmin] text-[2.5vmin] cursor-pointer font-bold transition-all opacity-90 hover:opacity-100 primarytext'>Contact Us</a>
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-end md:justify-center md:items-center w-1/2 pt-[5vmin]">
                <Image src='http://codestar.xyz/demo/Affiliate/assets/img/main.png' alt='hero' width={500} height={500} />
            </div>
        </div>
    )
}
