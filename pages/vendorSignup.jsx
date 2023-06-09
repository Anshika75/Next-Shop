import React, { useState } from "react";
import { useAuth } from "@/contexts/authContext";
import Link from "next/link";
function SignUp() {
  const [formUser, setFormUser] = useState({role:"vendor"});
  const { user ,signup } = useAuth();
  console.log(user)
  async function handleSubmit(e){
    e.preventDefault();
    try{
      let A = signup(formUser);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="h-screen flex justify-center items-center primary">
      <form className="bg-white flex flex-col items-center border  p-[5vmin] rounded-md shadow-lg" onSubmit={handleSubmit}>
        <h1 className="font-extrabold text-[4vmin] primaryfont text-[#651a57] my-[2vmin]">SignUp, Vendor</h1>
        <input className="px-[3vmin] py-[2vmin] my-[2vmin] bg-[#f2f2f2] transition-all hover:outline-[#651a57] focus:outline-[#651a57]" type="text" placeholder="Name" value={formUser.name} onChange={(e)=>setFormUser({...formUser,name:e.target.value})} required/>
        <input className="px-[3vmin] py-[2vmin] my-[2vmin] bg-[#f2f2f2] transition-all hover:outline-[#651a57] focus:outline-[#651a57]" type="email" placeholder="Email" value={formUser.email} onChange={(e)=>setFormUser({...formUser,email:e.target.value})} required/>
        <input className="px-[3vmin] py-[2vmin] my-[2vmin] bg-[#f2f2f2] transition-all hover:outline-[#651a57] focus:outline-[#651a57]" type="password" placeholder="Password" value={formUser.password} onChange={(e)=>setFormUser({...formUser,password:e.target.value})} required/>
        <button className="primary text-white primaryfont px-[4vmin] py-[1vmin] rounded-full hover:bg-[#651a57bb] m-[2vmin] transition-all hover:scale-90 hover:opacity-90">SignUp</button>
        <Link className="primaryfont" href={"/login"}>Already have an account? <span className="text-[#651a57]">Login</span> </Link>
      </form>
    </div>
  );
}

export default SignUp;
