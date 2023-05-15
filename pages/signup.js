import React, { useState } from "react";
import { useAuth } from "@/contexts/authContext";
import Link from "next/link";
function SignUp() {
  const { user ,signup } = useAuth();
  const [formUser, setFormUser] = useState({role:"user"});
  // Take Location Permission and get longnitude and latitude
  //

  const [userLoc, setUserLoc] = useState({});

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      console.log("D")
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  const showPosition = (position) => {
    setUserLoc({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });

    console.log(userLoc);
  };

  console.log(user)
  async function handleSubmit(e){
    e.preventDefault();
    try{
      let A = signup({
        ...formUser,
        ...userLoc
      });
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="h-screen flex justify-center items-center primary">
      <form className="bg-white flex flex-col items-center border  p-[5vmin] rounded-md shadow-lg" onSubmit={handleSubmit}>
        <h1 className="font-extrabold text-[4vmin] primaryfont text-[#651a57] my-[2vmin]">SignUp</h1>
        <select className="px-[3vmin] py-[2vmin] my-[2vmin] bg-[#f2f2f2] transition-all hover:outline-[#651a57] focus:outline-[#651a57]" value={formUser.role} onChange={(e)=>setFormUser({...formUser,role:e.target.value})}>
          <option value="user">User</option>
          <option value="vendor">Vendor</option>
        </select>
        <input className="px-[3vmin] py-[2vmin] my-[2vmin] bg-[#f2f2f2] transition-all hover:outline-[#651a57] focus:outline-[#651a57]" type="text" placeholder="Name" value={formUser.name} onChange={(e)=>setFormUser({...formUser,name:e.target.value})} required/>
        <input className="px-[3vmin] py-[2vmin] my-[2vmin] bg-[#f2f2f2] transition-all hover:outline-[#651a57] focus:outline-[#651a57]" type="email" placeholder="Email" value={formUser.email} onChange={(e)=>setFormUser({...formUser,email:e.target.value})} required/>
        <input className="px-[3vmin] py-[2vmin] my-[2vmin] bg-[#f2f2f2] transition-all hover:outline-[#651a57] focus:outline-[#651a57]" type="password" placeholder="Password" value={formUser.password} onChange={(e)=>setFormUser({...formUser,password:e.target.value})} required/>
        <input className="px-[3vmin] py-[2vmin] my-[2vmin] bg-[#f2f2f2] transition-all hover:outline-[#651a57] focus:outline-[#651a57]" type="password" placeholder="Confirm Password" value={formUser.confirmPassword} onChange={(e)=>setFormUser({...formUser,confirmPassword:e.target.value})} required/>

        <button className="primary text-white primaryfont px-[4vmin] py-[1vmin] rounded-full hover:bg-[#651a57bb] m-[2vmin] transition-all hover:scale-90 hover:opacity-90" onClick={getLocation}>Set Location</button>
        <button className="primary text-white primaryfont px-[4vmin] py-[1vmin] rounded-full hover:bg-[#651a57bb] m-[2vmin] transition-all disabled:bg-[#351a5733] hover:opacity-90 w-full" disabled='{
          !formUser.name ||
          !formUser.email ||
          !formUser.password ||
          !formUser.confirmPassword ||
          !userLoc.lat ||
          !userLoc.long
        }'>SignUp</button>
        <Link className="primaryfont" href={"/login"}>Already have an account? <span className="text-[#651a57]">Login</span> </Link>
      </form>
    </div>
  );
}

export default SignUp;
