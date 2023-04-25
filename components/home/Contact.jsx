import React from 'react'

export default function Contact() {
    return (
        <div className="w-full contact flex flex-col items-center justify-start px-[5vmin] md:px-[10vmin] lg:px-[15vmin] py-[15vmin]">
            <h1 className='text-[#fff] text-[7vmin] font-bold mt-[5vmin] headingfont z-20'>Contact Us</h1>
            <p className='text-[#fff] text-[3vmin] secondaryfont w-[90%] text-center font-medium mb-[5vmin] z-20'>Do you have any questions?</p>
            <div className="grid grid-cols-auto md:grid-cols-3 gap-2 z-20">
                <div className="flex flex-col items-center justify-center h-[25vmin] w-[45vmin] m-[3vmin] bg-[#fff] shadow-md py-[5vmin]">
                    <p>
                        <i className="pr-[1.2vmin] fa-solid fa-location-dot primarytext text-[3vmin] cursor-pointer opacity-80 transition-all hover:opacity-100"></i> <span className='text-[#651a57] text-[3vmin] font-bold py-[1vmin] headingfont'>Address</span>
                    </p>
                    <p className='text-[#333] text-[2.5vmin] secondaryfont w-[90%] py-[1vmin] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="flex flex-col items-center justify-center h-[25vmin] w-[45vmin] m-[3vmin] bg-[#fff] shadow-md py-[5vmin]">
                    <p>
                        <i className="pr-[1.2vmin] fa-solid fa-envelope primarytext text-[3vmin] cursor-pointer opacity-80 transition-all hover:opacity-100"></i> <span className='text-[#651a57] text-[3vmin] font-bold py-[1vmin] headingfont'>Email</span>
                    </p>
                    <p className='text-[#333] text-[2.5vmin] secondaryfont w-[90%] py-[1vmin] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="flex flex-col items-center justify-center h-[25vmin] w-[45vmin] m-[3vmin] bg-[#fff] shadow-md py-[5vmin]">
                    <p>
                        <i className="pr-[1.2vmin] fa-solid fa-phone primarytext text-[3vmin] cursor-pointer opacity-80 transition-all hover:opacity-100"></i> <span className='text-[#651a57] text-[3vmin] font-bold py-[1vmin] headingfont'>Phone</span>
                    </p>
                    <p className='text-[#333] text-[2.5vmin] secondaryfont w-[90%] py-[1vmin] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    )
}
