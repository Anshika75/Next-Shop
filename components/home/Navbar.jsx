import { useAuth } from '@/contexts/authContext'
import Link from 'next/link';
import React from 'react'
export default function Navbar() {
  const {user} = useAuth();
  return (
    <div className="bg-[#f6ebe8] fixed top-0  left-0 z-20 shadow-md h-[60px] w-full text-white flex items-center px-10">
      <div className="flex w-1/4">
        {/* <Image src='/logo.png' alt='logo' width={50} height={50} /> */}
        <p className="mx-[1.2vmin] cursor-pointer hover:font-semibold transition-all primarytext primaryfont text-[3vmin] font-medium">
          NEXTSHOP
        </p>
      </div>
      <div className="flex w-1/2 h-full items-center justify-center text-[#333]">
        <a
          href=""
          className="mx-[2.5vmin] text-[2.5vmin] cursor-pointer hover:font-semibold transition-all opacity-90 hover:opacity-100"
        >
          Home
        </a>
        {
          user.role == "vendor"&& (
            <a
          href=""
          className="mx-[2.5vmin] text-[2.5vmin] cursor-pointer hover:font-semibold transition-all opacity-90 hover:opacity-100"
        >
          <Link href={
            '/admin/product'
          }>
            Products
          </Link>
        </a>
          )
        }
        <a
          href=""
          className="mx-[2.5vmin] text-[2.5vmin] cursor-pointer hover:font-semibold transition-all opacity-90 hover:opacity-100"
        >
          <Link href={user.email ? "/logout" : "/login"}>
            {user.email ? "Logout" : "Login"}
          </Link>
        </a>
      </div>
      <div className="flex w-1/4 h-full items-center justify-end text-black">
        <i className="fa-solid fa-cart-shopping primarytext text-[4vmin] ml-[2vmin] cursor-pointer opacity-80 transition-all hover:opacity-100"></i>
      </div>
    </div>
  );
}
