import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instagram from '../Images/Social-media/instagram.png';
import tiktok from '../Images/Social-media/tik-tok.png';
import email from '../Images/Social-media/email.png';
import EnglishLanguage from "../Data/EnglishLanguage";
import ArabicLanguage from "../Data/ArabicLanguage";

const Navbar = ({ language, handleLanguage }) => {
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
    <div className={`fixed top-0 left-0 w-full lg:p-5 sm:p-3 max-sm:p-4 transition-all duration-300 ${activeBg ? "bg-slate-200" : "bg-[#fdfdfd42]"} z-50`}>
      <div className="w-full flex items-center relative z-10">
        {language === 'En' ? 
        <>
          <Link className="lg:w-[20%] md:w-[30%] sm:w-[30%] max-sm:w-[60%] lg:-mt-2" to='/'>
            <span className="lg:text-4xl sm:text-2xl max-sm:text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              W
            </span>
            <span className="lg:text-2xl sm:text-xl max-sm:text-lg font-mainFont">ebX-Crafters</span>
          </Link>
          <div className="w-[85%] flex justify-between items-center">
            {/* Navigation Links */}
            <ul className='flex space-x-4 text-gray-500'>
              <Link to='/about' className="lg:text-2xl sm:text-xl max-sm:hidden font-mainFont font-bold px-3 hover:text-gray-800">   { EnglishLanguage.map((item)=>item.about)  }</Link>
              <Link to='/services' className="lg:text-2xl sm:text-xl max-sm:hidden font-mainFont font-bold px-3 hover:text-gray-800">{ EnglishLanguage.map((item)=>item.service)  }</Link>
              <Link to='/projects' className="lg:text-2xl sm:text-xl max-sm:hidden font-mainFont font-bold px-3 hover:text-gray-800">{ EnglishLanguage.map((item)=>item.projects) }</Link>
            </ul>
            {/* Social Media Icons */}
            
            <ul className='flex flex-row space-x-4'>
              <button className="relative lg:w-12 lg:h-12 sm:w-9 sm:h-9 max-sm:w-8 max-sm:h-8 rounded-full flex justify-center items-center lg:p-2 sm:p-2 max-sm:p-1 border-2 border-black grayscale
              hover:grayscale-0 
              before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]"
              onClick={handleLanguage}
              >
                {language === 'En' ? 'Ar' : 'En'}
              </button>
              <div className="relative lg:w-12 lg:h-12 sm:w-9 sm:h-9 max-sm:w-8 max-sm:h-8 rounded-full flex justify-center items-center lg:p-2 sm:p-2 max-sm:p-1 border-2 border-black grayscale
              hover:grayscale-0 
              before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]">
                <a href="https://www.instagram.com/webx_crafters" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
              <div className="relative lg:w-12 lg:h-12 sm:w-9 sm:h-9 max-sm:w-8 max-sm:h-8 rounded-full flex justify-center items-center lg:p-2 sm:p-2 max-sm:p-1 border-2 border-black grayscale
              hover:grayscale-0 
              before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]">
                <a href="https://www.tiktok.com/@webx_crafters" target="_blank" rel="noopener noreferrer">
                  <img src={tiktok} alt="tiktok" />
                </a>
              </div>
              <div className="relative lg:w-12 lg:h-12 sm:w-9 sm:h-9 max-sm:w-8 max-sm:h-8 rounded-full flex justify-center items-center lg:p-2 sm:p-2 max-sm:p-1 border-2 border-black grayscale
              hover:grayscale-0 
              before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]">
                <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img src={email} alt="gmail" />
                </a>
              </div>
            </ul>
          </div>
        </>
        : 
        <>
          
          <div className="w-[85%] flex justify-between items-center">
          
          {/* Social Media Icons */}
          
            <ul className='flex flex-row space-x-4'>
              <div className="relative lg:w-12 lg:h-12 sm:w-9 sm:h-9 max-sm:w-8 max-sm:h-8 rounded-full flex justify-center items-center lg:p-2 sm:p-2 max-sm:p-1 border-2 border-black grayscale
              hover:grayscale-0 
              before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]">
                <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img src={email} alt="gmail" />
                </a>
              </div>
              <div className="relative lg:w-12 lg:h-12 sm:w-9 sm:h-9 max-sm:w-8 max-sm:h-8 rounded-full flex justify-center items-center lg:p-2 sm:p-2 max-sm:p-1 border-2 border-black grayscale
              hover:grayscale-0 
              before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]">
                <a href="https://www.tiktok.com/@webx_crafters" target="_blank" rel="noopener noreferrer">
                  <img src={tiktok} alt="tiktok" />
                </a>
              </div>
              <div className="relative lg:w-12 lg:h-12 sm:w-9 sm:h-9 max-sm:w-8 max-sm:h-8 rounded-full flex justify-center items-center lg:p-2 sm:p-2 max-sm:p-1 border-2 border-black grayscale
              hover:grayscale-0 
              before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]">
                <a href="https://www.instagram.com/webx_crafters" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
              <button className="relative lg:w-12 lg:h-12 sm:w-9 sm:h-9 max-sm:w-8 max-sm:h-8 rounded-full flex justify-center items-center lg:p-2 sm:p-2 max-sm:p-1 border-2 border-black grayscale
              hover:grayscale-0 
              before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]"
              onClick={handleLanguage}
              >
                {language === 'En' ? 'Ar' : 'En'}
              </button>
            </ul>
            {/* Navigation Links */}
            <ul className='flex space-x-4 text-gray-500'>
              <Link to='/services' className="lg:text-2xl sm:text-xl max-sm:hidden font-mainFont font-bold px-3 hover:text-gray-800">{ ArabicLanguage.map((item)=>item.service) }</Link>
              <Link to='/projects' className="lg:text-2xl sm:text-xl max-sm:hidden font-mainFont font-bold px-3 hover:text-gray-800">{ ArabicLanguage.map((item)=>item.projects) }</Link>
              <Link to='/about' className="lg:text-2xl sm:text-xl max-sm:hidden font-mainFont font-bold px-3 hover:text-gray-800">   { ArabicLanguage.map((item)=>item.about) }</Link>
            </ul>
          </div>
          <Link className="lg:w-[20%] md:w-[30%] sm:w-[30%] max-sm:w-[60%] lg:-mt-2" to='/'>
            <span className="lg:text-4xl sm:text-2xl max-sm:text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              W
            </span>
            <span className="lg:text-2xl sm:text-xl max-sm:text-lg font-mainFont">ebX-Crafters</span>
          </Link>
        </>
        }
      </div>
    </div>
  );
}

export default Navbar;
