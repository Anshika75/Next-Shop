import React from 'react'
import Image from 'next/image'
export default function Navbar() {
  return (
    <div className='bg-[#fff] shadow-md h-[60px] w-full text-white flex items-center px-10'>
    <div className="flex w-1/2">
    <Image src='/logo.png' alt='logo' width={50} height={50} />
    </div>
    <div className="flex w-1/2 h-full items-center justify-end text-black">
      <a href="" className='mx-[1.2vmin] cursor-pointer hover:font-semibold transition-all'>Home</a>
      <a href="" className='mx-[1.2vmin] cursor-pointer hover:font-semibold transition-all'>Products</a>
      <a href="" className='mx-[1.2vmin] cursor-pointer hover:font-semibold transition-all'>Vendors</a>
      <a href="" className='mx-[1.2vmin] cursor-pointer hover:font-semibold transition-all'>Sign In/Up</a>
      <i className="fa-solid fa-cart-shopping primarytext text-[4vmin] ml-[2vmin] cursor-pointer opacity-80 transition-all hover:opacity-100"></i>
    </div>
    </div>
  )
}
