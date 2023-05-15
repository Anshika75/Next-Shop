import React from 'react'

export default function Vendor() {
    return (
        <section className='bg-[#F9FAFF] flex flex-col items-center justify-evenly flex-wrap px-[5vmin] md:px-[10vmin]  lg:px-[15vmin] pb-[25vmin]'>
            <h1 className='text-[#651a57] text-[7vmin] font-bold mt-[5vmin] headingfont'>Our Vendors</h1>
            <p className='text-[#333] text-[3vmin] secondaryfont primarytext w-[90%] text-center font-bold mb-[5vmin]'>Your shop next door</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
                <div className="relative flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hover:scale-110">
                    <img className='absolute h-full w-full' src="http://demo.templatin.com/uniqueshop17/img/m/1-medium_default.jpg" alt=""/>
                </div>
                <div className="relative flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hover:scale-110">
                    <img className='absolute h-full w-full' src="http://demo.templatin.com/uniqueshop17/img/m/1-medium_default.jpg" alt=""/>
                </div>
                <div className="relative flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hover:scale-110">
                    <img className='absolute h-full w-full' src="http://demo.templatin.com/uniqueshop17/img/m/1-medium_default.jpg" alt=""/>
                </div>
                <div className="relative flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hover:scale-110">
                    <img className='absolute h-full w-full' src="http://demo.templatin.com/uniqueshop17/img/m/1-medium_default.jpg" alt=""/>
                </div>
                <div className="relative flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hover:scale-110">
                    <img className='absolute h-full w-full' src="http://demo.templatin.com/uniqueshop17/img/m/1-medium_default.jpg" alt=""/>
                </div>
                <div className="relative flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hover:scale-110">
                    <img className='absolute h-full w-full' src="http://demo.templatin.com/uniqueshop17/img/m/1-medium_default.jpg" alt=""/>
                </div>
                <div className="relative flex flex-col items-center justify-center h-[20vmin] w-[20vmin] m-[3vmin] cursor-pointer transition-all shadow-md py-[5vmin] hover:scale-110">
                    <img className='absolute h-full w-full' src="http://demo.templatin.com/uniqueshop17/img/m/1-medium_default.jpg" alt=""/>
                </div>
            </div>
        </section>
    )
}
