import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instagram from '../Images/Social-media/instagram.png';
import tiktok from '../Images/Social-media/tik-tok.png';
import email from '../Images/Social-media/email.png';


const Navbar = () => {
  const [activeBg,setActiveBg] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",(e)=>{
      if(window.pageYOffset > 100){
        setActiveBg(true)
      }else{
        setActiveBg(false)
      }
    })
  })
  return (
    <div className={`fixed top-0 left-0 w-full p-5 transition-all duration-300 ${activeBg ? "bg-slate-50" : "bg-none"} z-50`}>
      <div className="w-full flex items-center justify-between relative z-10">
        <Link className="flex items-center" to='/'>
          <span className="text-4xl font-mainFont font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            W
          </span>
          <span className="text-2xl font-mainFont">ebX-Crafters</span>
        </Link>
        <div className="w-[85%] flex justify-between items-center">
          {/* Navigation Links */}
          <ul className='flex space-x-4 text-gray-500'>
            <li><Link to='/about' className="text-2xl font-mainFont font-bold px-2 hover:text-gray-800">About</Link></li>
            <li><Link to='/services' className="text-2xl font-mainFont font-bold px-2 hover:text-gray-800">Services</Link></li>
            <li><Link to='/projects' className="text-2xl font-mainFont font-bold px-2 hover:text-gray-800">Projects</Link></li>
          </ul>

          {/* Social Media Icons */}
          <ul className='flex flex-row space-x-4'>
            <div className="relative w-12 h-12 rounded-full flex justify-center items-center p-2 border-2 border-black grayscale
            hover:grayscale-0 
            before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]">
              <a href="https://www.instagram.com/webx_crafters" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
            <div className="relative w-12 h-12 rounded-full flex justify-center items-center p-2 border-2 border-black grayscale
            hover:grayscale-0 
            before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]">
              <a href="https://www.tiktok.com/@webx_crafters" target="_blank" rel="noopener noreferrer">
                <img src={tiktok} alt="tiktok" />
              </a>
            </div>
            <div className="relative w-12 h-12 rounded-full flex justify-center items-center p-2 border-2 border-black grayscale
            hover:grayscale-0 
            before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]">
              <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={email} alt="gmail" />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
