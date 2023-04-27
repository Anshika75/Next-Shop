import React from 'react'

export default function Features() {
  return (

    <section className='bg-[#F9FAFF] py-[15vmin] flex flex-row items-center justify-between flex-wrap px-[5vmin] md:px-[10vmin] lg:px-[15vmin]'>
        <div className="flex flex-col items-center justify-center h-[45vmin] w-[45vmin] m-[3vmin] bg-[#fff] shadow-md py-[5vmin]">
            <i className="fa-solid fa-cart-shopping primarytext text-[7vmin] cursor-pointer opacity-80 transition-all hover:opacity-100"></i>
            <h1 className='text-[#651a57] text-[3vmin] font-bold py-[1vmin] headingfont'>Shopping</h1>
            <p className='text-[#333] text-[2.5vmin] secondaryfont w-[90%] py-[1vmin] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-center h-[45vmin] w-[45vmin] m-[3vmin] bg-[#fff] shadow-md py-[5vmin]">
            <i className="fa-solid fa-cart-shopping primarytext text-[7vmin] cursor-pointer opacity-80 transition-all hover:opacity-100"></i>
            <h1 className='text-[#651a57] text-[3vmin] font-bold py-[1vmin] headingfont'>Shopping</h1>
            <p className='text-[#333] text-[2.5vmin] secondaryfont w-[90%] py-[1vmin] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className="flex flex-col items-center justify-center h-[45vmin] w-[45vmin] m-[3vmin] bg-[#fff] shadow-md py-[5vmin]">
            <i className="fa-solid fa-cart-shopping primarytext text-[7vmin] cursor-pointer opacity-80 transition-all hover:opacity-100"></i>
            <h1 className='text-[#651a57] text-[3vmin] font-bold py-[1vmin] headingfont'>Shopping</h1>
            <p className='text-[#333] text-[2.5vmin] secondaryfont w-[90%] py-[1vmin] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </section>
  )
}
