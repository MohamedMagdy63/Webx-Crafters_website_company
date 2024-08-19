import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Importing icons from Heroicons
import instagram from '../Images/Social-media/instagram.png';
import tiktok from '../Images/Social-media/tik-tok.png';
import email from '../Images/Social-media/email.png';
import EnglishLanguage from "../Data/EnglishLanguage";
import ArabicLanguage from "../Data/ArabicLanguage";

const Navbar = ({ language, handleLanguage }) => {
  const [activeBg, setActiveBg] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setActiveBg(true);
      } else {
        setActiveBg(false);
      }
    });
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full lg:p-5 sm:p-3 max-sm:p-4 transition-all duration-300 ${activeBg ? "bg-slate-200" : "bg-[#fdfdfd42]"} z-50`}>
      <div className="w-full flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link className="lg:w-[20%] md:w-[30%] sm:w-[30%] max-sm:w-[60%] lg:-mt-2" to='/'>
          <span className="lg:text-4xl sm:text-2xl max-sm:text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            W
          </span>
          <span className="lg:text-2xl sm:text-xl max-sm:text-lg font-mainFont">ebX-Crafters</span>
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 focus:outline-none">
            {sidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>

        {/* Navigation Links and Social Media Icons */}
        <div className="hidden lg:flex w-[85%] justify-between items-center">
          {/* Navigation Links */}
          <ul className='flex space-x-4 text-gray-500'>
            <Link to='/about' className="lg:text-2xl sm:text-xl font-mainFont font-bold px-3 hover:text-gray-800 max-sm:hidden">{language === 'En' ? EnglishLanguage.map((item) => item.about) : ArabicLanguage.map((item) => item.about)}</Link>
            <Link to='/services' className="lg:text-2xl sm:text-xl font-mainFont font-bold px-3 hover:text-gray-800 max-sm:hidden">{language === 'En' ? EnglishLanguage.map((item) => item.service) : ArabicLanguage.map((item) => item.service)}</Link>
            <Link to='/projects' className="lg:text-2xl sm:text-xl font-mainFont font-bold px-3 hover:text-gray-800 max-sm:hidden">{language === 'En' ? EnglishLanguage.map((item) => item.projects) : ArabicLanguage.map((item) => item.projects)}</Link>
          </ul>

          {/* Social Media Icons */}
          <ul className='flex flex-row space-x-4'>
            <button className="relative lg:w-12 lg:h-12 sm:w-9 sm:h-9 max-sm:w-8 max-sm:h-8 rounded-full flex justify-center items-center lg:p-2 sm:p-2 max-sm:p-1 border-2 border-black grayscale hover:grayscale-0 before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]"
              onClick={handleLanguage}>
              {language === 'En' ? 'Ar' : 'En'}
            </button>
            <SocialIcon href="https://www.instagram.com/webx_crafters" imgSrc={instagram} altText="Instagram" />
            <SocialIcon href="https://www.tiktok.com/@webx_crafters" imgSrc={tiktok} altText="TikTok" />
            <SocialIcon href="mailto:webxcrafters@gmail.com" imgSrc={email} altText="Email" />
          </ul>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out" onClick={() => setSidebarOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 w-2/3 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out flex flex-col p-5 space-y-6">
            <button onClick={() => setSidebarOpen(false)} className="self-end text-gray-600 focus:outline-none">
              <XIcon className="w-6 h-6" />
            </button>
            {/* Navigation Links */}
            <Link to='/about' className="text-xl font-bold hover:text-gray-800 relative group" onClick={() => setSidebarOpen(false)}>
              {language === 'En' ? EnglishLanguage.map((item) => item.about) : ArabicLanguage.map((item) => item.about)}
              <span className="block h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to='/services' className="text-xl font-bold hover:text-gray-800 relative group" onClick={() => setSidebarOpen(false)}>
              {language === 'En' ? EnglishLanguage.map((item) => item.service) : ArabicLanguage.map((item) => item.service)}
              <span className="block h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to='/projects' className="text-xl font-bold hover:text-gray-800 relative group" onClick={() => setSidebarOpen(false)}>
              {language === 'En' ? EnglishLanguage.map((item) => item.projects) : ArabicLanguage.map((item) => item.projects)}
              <span className="block h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button className="relative w-full h-12 text-xl rounded-md flex justify-center items-center font-bold p-2 border-2 border-b-4 border-gray-200 hover:bg-cyan-700 hover:text-white hover:border-white">
              {language === 'En' ? 'عربي' : 'English'}
              <span className="block h-0.5 w-0 bg-gray-800 transition-all duration-300 hover:w-full absolute bottom-0"></span>
            </button>
            <div className="mt-auto flex justify-center items-center">
              <ul className='flex flex-row space-x-4'>
                <SocialIcon href="https://www.instagram.com/webx_crafters" imgSrc={instagram} altText="Instagram" />
                <SocialIcon href="https://www.tiktok.com/@webx_crafters" imgSrc={tiktok} altText="TikTok" />
                <SocialIcon href="mailto:webxcrafters@gmail.com" imgSrc={email} altText="Email" />
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// SocialIcon Component
const SocialIcon = ({ href, imgSrc, altText }) => (
  <div className="relative lg:w-12 lg:h-12 sm:w-9 sm:h-9 max-sm:w-8 max-sm:h-8 rounded-full flex justify-center items-center lg:p-2 sm:p-2 max-sm:p-1 border-2 border-black grayscale hover:grayscale-0 before:content before:absolute before:w-0 before:h-0 before:bg-white before:rounded-full before:hover:w-full before:hover:h-full before:transition-all before:duration-500 before:z-[-1]">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt={altText} />
    </a>
  </div>
);

export default Navbar;
